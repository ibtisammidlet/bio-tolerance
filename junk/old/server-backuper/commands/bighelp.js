const { l } = require("../localize");

module.exports = {
  name: "bighelp",
  aliases: ["bh"],
  description: "cmd.help.commands.bighelp",
  bigDescription: "cmd.bighelp.commands.bighelp",
  category: "help",
  guildOnly: false,
  async execute(message) {
    const lg = this.language;
    const embed = {
      title: l("cmd.help.title", lg),
      description: l("cmd.help.description", lg),
      color: 14895693,
      thumbnail: {
        url: `https://cdn.discordapp.com/avatars/${this.client.user.id}/${this.client.user.avatar}.png?size=256`,
      },
      fields: this.client.commands
        .filter((c) => !c.hidden)
        .map((command) => ({
          name: l(command.name, lg),
          value: l(command.bigDescription || command.description, lg),
        })),
      footer: {
        text: l("requestedBy", lg, { tag: message.author.tag }),
      },
    };
    message.channel.send({
      embeds: [embed],
    });
  },
};
