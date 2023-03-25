const msg = `
This bot was created by **MoonlightCapital**#0554. If you want to contact me, please head to https://discord.gg/8376ZVg
`

exports.run = async (client, message, args) => {
  message.channel.send(msg)
}

exports.help = {
  name: 'credits',
  info: 'Shows some credits about the bot',
  usage: '',
  unlisted: false,
}

exports.config = {
  guildOnly: true,
  ownerOnly: false,
  aliases: [],
}
