const responses = require("../responses");
const userUtils = require("../utils/user");

module.exports = {
  name: "whitelist",
  aliases: ["wl", "w"],
  description: "cmd.whitelist.description",
  category: "security",
  args: ["user"],
  guildOnly: true,
  /** @param {import("discord.js").Message} message */
  async execute(message, [rawUser]) {
    // const { l } = require("../localize.js");
    const { whitelist, client } = this;
    const user = await userUtils.resolve(client, rawUser);
    if (!user) {
      message.reply("Provide a user!");
      return;
    }
    console.debug(user);
    if (
      userUtils.canExecuteGuildOwnerCommands(
        client,
        message.guild,
        message.author
      )
    ) {
      message.reply("You must be the owner of this server to whitelist users!");
      return;
    }
    whitelist.put(`${message.guild.id}.${user.id}`, "");
    responses.done(message);
  },
};
