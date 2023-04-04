import { discordApp } from '.';
import { readdir } from 'fs';

let applicationCommands: any[] = [];

readdir(__dirname + '/commands', (e, d) => d.map((moduleName) => {
    import(`./commands/${moduleName}`).then((moduleData) => applicationCommands.push(moduleData?.default));
})), readdir(__dirname + '/events', (e, d) => d.map((moduleName) => import(`./events/${moduleName}`)));

discordApp.on('ready', () => {
    discordApp.application?.commands.set(applicationCommands);
}).on('interactionCreate', (interaction) => {
    interaction.isChatInputCommand() && applicationCommands.find((command) => command.name === interaction.commandName).execute(interaction);
});