import {
    Client,
    BaseCommandInteraction,
    Modal,
    MessageActionRow,
    TextInputComponent,
    ModalActionRowComponent,
} from 'discord.js';
import { Command } from '../types/command';
import { chatHistory } from './Ask';



export const Session: Command = {
    name: "session",
    description: "Resettet die Chat-Session",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        // Open the file neske.txt
        let user = interaction.user;
        chatHistory[user.id] = [];
        await interaction.reply({ content: `Chat-Session wurde resettet`, ephemeral: true});
    }
};