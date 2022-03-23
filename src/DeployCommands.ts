import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Configuration } from './Configuration';

const configuration = Configuration.getInstance();

const command = new SlashCommandBuilder()
        .setName('role')
        .setDescription('Join or leave roles')
        .addSubcommand(subcommand =>
            subcommand
                .setName('join')
                .setDescription('Join a role')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('The role to join')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('leave')
                .setDescription('Leave a role')
                .addRoleOption(option =>
                    option.setName('role')
                        .setDescription('The role to leave')
                        .setRequired(true)));

const rest = new REST({ version: '9' }).setToken(configuration.discordBotToken);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(configuration.discordClientId),
            { body: [command.toJSON()] },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();