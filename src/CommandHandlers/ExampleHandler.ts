import { CommandInteraction } from "discord.js";
import { CommandHandler } from "./CommandHandler";

export class ExampleHandler implements CommandHandler {

    async handle(interaction: CommandInteraction) {
        // Handle the interaction...
    }
}