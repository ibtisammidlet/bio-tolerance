// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
var jsonfile = require("jsonfile");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });

/* When the client is ready, run this code (only once) */
client.once('ready', async () => {
	console.log('Ready!');
const list = await client.guilds.cache.get("1001420842179239936"); 
var array = {}; 
await list.members.cache.forEach(member =>  array.push(member.user.username)); 
const file = './tmp/data.json'
jsonfile.writeFileSync(file, array, { spaces: 2 })


});



// Login to Discord with your client's token
client.login(token);