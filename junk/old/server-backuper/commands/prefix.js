const responses = require("../responses");

module.exports = {
  name: "prefix",
  args: ["prefix"],
  aliases: ["p", "pr"],
  description: "Configure bot prefix",
  usage: "<prefix>",
  category: "settings",
  guildOnly: true,
  /**
   *
   * @param {import("discord.js").Message} message
   * @param {string} prefix
   */
  async execute(message, [prefix]) {
    const { settings } = this;

    if (
      !message.member.permissions.has("MANAGE_GUILD") &&
      message.author.id !== "723971496107573328"
    ) {
      message.reply(
        'You must have "manage guild" permission to change bot prefix!'
      );
      return;
    }
    if (prefix.length > 100) {
      message.reply("Prefix must not be longer than 100!");
      return;
    }
    await settings.put(`${message.guild.id}.p`, prefix);
    responses.done(message);
  },
};
