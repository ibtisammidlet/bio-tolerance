const { l } = require("../localize");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "cmd.bighelp.commands.help",
  category: "help",
  guildOnly: false,
  async execute(message, [command]) {
    const lg = this.language;
    if (command) {
    } else {
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
            value: l(command.description, lg),
          })),
        footer: {
          text: l("requestedBy", lg, { tag: message.author.tag }),
        },
      };
      message.channel.send({
        embeds: [embed],
      });
    }
  },
};
