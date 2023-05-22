import { ApplicationCommandOptionType, REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv'
dotenv.config();
const commands = [
    {
      name: 'image',
      description: 'Sends images using unsplash api',
      options:[
      {
        name:"text",
        description:"To get the desired type of image",
        type: ApplicationCommandOptionType.String,
        required:true
      }
      ]
    },
  ];
  const rest = new REST({ version: '10' }).setToken(process.env['TOKEN']);
  async function slash(){
  try {
    await rest.put(Routes.applicationCommands(process.env['CLIENTID'],process.env['GUILDID']), { body: commands });
  } catch (error) {
    console.error(error);
  }
}
export{slash};