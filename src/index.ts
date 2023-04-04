import { Client } from 'discord.js';
import Settings from './settings';

export const discordApp = new Client({ intents: [1] });
discordApp.login(Settings.TOKEN);
import './handler';