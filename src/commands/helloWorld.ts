import { CommandInteraction } from 'discord.js';

export default {
    name: "example", description: "...",

    async execute(interaction: CommandInteraction) {
        interaction.reply('Hello World!');
    }
};