// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });

/* When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('Ready!');
/* dis v14 
const list = await client.guilds.cache.get("1001420842179239936"); 
list.members.cache.forEach(member => console.log(member.user.username)); 
*/
/*
guild :{
  id: "197038439483310086"
}

guild.members.fetch({ cache: true })
  .then(console.log)
  .catch(console.error);

*/
/** dis v12 
const id = '197038439483310086';
const guild = client.guilds.cache.find((g) => g.id === id);

if (!guild)
  return console.log(`Can't find any guild with the ID "${id}"`);

guild.members
  .fetch()
  .then((members) =>
    members.forEach((member) => console.log(member.user.username)),
  );



});
*/
client.on('message', async message => {
  if (message.content.startsWith(prefix + "rolelist")) {
      const Role = message.guild.roles.cache.find(role => role.name == "TEST ROLE");
      const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
      message.channel.send(`Users with ${Role.name}: ${Members}`);
  };
});








// Login to Discord with your client's token
client.login(token);


/*
fs.readdir("./events/", (_err, files) => {
  files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      console.log(`👌 Event loaded: ${eventName}`);
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (_err, files) => {
  files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      client.commands.set(commandName, props);
      console.log(`👌 Command loaded: ${commandName}`);
  });
});
*/