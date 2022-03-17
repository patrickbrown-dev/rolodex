import { Client, Intents } from 'discord.js';
import { CommandRouter } from './CommandRouter';
import { ExampleHandler } from './CommandHandlers/ExampleHandler';
import { Configuration } from './Configuration';

const configuration = Configuration.getInstance();
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commandRouter = new CommandRouter();

commandRouter.register('quote', new ExampleHandler());

discordClient.once('ready', () => console.log('Ready!'));

discordClient.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	commandRouter.route(interaction.commandName, interaction);
});

discordClient.login(configuration.discordBotToken);