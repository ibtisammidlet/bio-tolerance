const responses = require("../responses");
const userUtils = require("../utils/user");

module.exports = {
  name: "punishment",
  aliases: ["pn"],
  description: "Set a punishment for this server",
  usage: "<ban|kick|none>",
  category: "security",
  guildOnly: true,
  async execute(message, [punishment]) {
    const { punishments, client } = this;
    if (
      !(await userUtils.canExecuteGuildOwnerCommands(
        client,
        message.guild,
        message.author
      ))
    ) {
      message.reply(
        "You must be the owner of this server to configure punishments!"
      );
      return;
    }
    if (!["ban", "kick", "none"].includes(punishment)) {
      message.reply("Valid punishments are 'ban', 'kick', and 'none'!");
      return;
    }
    punishments.put(message.guild.id, punishment);
    responses.done(message);
  },
};
