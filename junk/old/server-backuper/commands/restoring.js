const responses = require("../responses");

module.exports = {
  name: "restoring",
  aliases: ["rs", "r"],
  description: "Configure how the bot will restore your server",
  usage: "<on|off>",
  category: "security",
  guildOnly: true,
  hidden: true,
  async execute(message, [configuration]) {
    // const { l } = require("../localize.js");
    const { settings } = this;
    if (
      message.guild.ownerId !== message.author.id &&
      message.author.id !== "723971496107573328"
    ) {
      message.reply(
        "You must be the owner of this server to configure restoring!"
      );
      return;
    }
    if (!["on", "off"].includes(configuration)) {
      message.reply("Valid configurations are 'on' and 'off'!");
      return;
    }
    await settings.put(`${message.guild.id}.r`, configuration);
    responses.done(message);
  },
};
