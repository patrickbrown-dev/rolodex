import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Configuration } from './Configuration';

const configuration = Configuration.getInstance();

const commands = [
    new SlashCommandBuilder()
        .setName('example')
        .setDescription('An example slash command.'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(configuration.discordBotToken);

rest.put(Routes.applicationCommands(configuration.discordClientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);