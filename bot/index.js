import {Client,GatewayIntentBits} from 'discord.js';
import {slash} from "./command.js";
import{Check} from "./myfunc.js";
import{unsplash_get_image} from "./unsplash.js";
import * as dotenv from 'dotenv'
dotenv.config();
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
    ] });
/*client.on('messageCreate',(message)=>{
if(message.author.bot){return;}
else{
  
}});*/
client.on("interactionCreate",(interaction)=>{
  if(!(interaction.isChatInputCommand())){return;}
    if(interaction.commandName==='image'){
      //obj check
      const check=new Check();
      var txt=interaction.options.get('text');
      txt=txt.value;
      if(!(check.check_bad_words(txt))){
      unsplash_get_image(txt).then(function(val){interaction.reply(val);});
      }else{
        interaction.reply("Access denied!");
      }
    }
});
client.login(process.env['TOKEN']);
