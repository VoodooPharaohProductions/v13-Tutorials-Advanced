const { Client } = require('discord.js')
const { config } = require('./config.json')
const client = new Client({
    intents: [
        "GUILDS",
    ],
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
})

client.on('messageCreate', (message) => {
  if(message.content === '!ping') {
    messsage.reply("pong!")
  }
}

process.on('unhandledRejection', err => {
  console.log(`Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(config.token)
