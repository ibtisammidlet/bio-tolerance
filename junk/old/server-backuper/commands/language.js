const { done } = require("../responses");

module.exports = {
  name: "language",
  aliases: ["l", "lang", "locale"],
  description: "Changes the bot language for this server",
  guildOnly: true,
  cooldown: 0,
  async execute(message, [language = "en"]) {
    if (
      !message.member.permissions.has("MANAGE_GUILD") &&
      message.author.id !== "723971496107573328"
    ) {
      message.reply(
        "You must have permission to manage this server in order to change bot language!"
      );
      return;
    }
    await this.languageDB.put(message.guild.id, language);
    done(message);
  },
};
