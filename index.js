const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keep_Alive = require("./keep_Alive.js")
client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - Sir It's Done`
  )
  bitly_axel = ""

  const r = new Discord.RichPresence()
    .setApplicationId('1044364402066980925')
    .setType('PLAYING') 
    .setURL('https://discord.com/invite/w9mfdcdp')
    // .setState('Server Boosts, Nitro, Hosting Etc')

    .setName('OwnWorld')
    .setDetails('Server Boosts, Nitro, Turkish id Etc')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1194776338230427698/1201184158840541225/standard_22.gif?ex=65c8e4ec&is=65b66fec&hm=ab5ca4f6b718d71428ec6cdcb6962140d1f2758f7d1021235a69582e0edd8429&")
    // .setAssetsSmallText('OWNER')
    .addButton('OurServer',"https://discord.com/invite/w9mfdcdp")


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})
require('dotenv').config();
// keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets
