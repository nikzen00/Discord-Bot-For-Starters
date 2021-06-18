const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(ODU0MDI5NDYwNjI5NjE4Njg4.YMd-6g.S8fPIPRwQPSc__gGQ9g5_j9PMyE);
