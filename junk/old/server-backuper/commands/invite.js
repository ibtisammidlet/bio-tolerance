module.exports = {
  name: "invite",
  aliases: [
    "vote",
    "support",
    "getbot",
    "invitebot",
    "add",
    "addbot",
    "github",
    "gh",
    "code",
    "source",
    "sourcecode",
    "opensource",
    "topgg",
    "dbl",
    "discordbotlist",
    "discordbotlistcom",
    "discordboats",
  ],
  description: "cmd.invite.description",
  category: "information",
  guildOnly: false,
  async execute(message) {
    // const { l } = require("../localize.js");
    const embed = {
      title: "Links",
      // description: "Here are all",
      color: 14895693,
      thumbnail: {
        url: "https://cdn.discordapp.com/avatars/797792817983389726/c37f92aa872ea449ff88450818cac325.png?size=256",
      },
      fields: [
        {
          name: "Invite link",
          value: "Invite the bot [here](https://server-backuper.cloud/invite)!",
        },
        {
          name: "Website",
          value:
            "You can visit our website [here](https://server-backuper.cloud)!",
        },
        {
          name: "Top.gg",
          value:
            "You can vote for the bot on [Top.gg](https://top.gg/bot/797792817983389726/vote)!",
        },
        {
          name: "DiscordBotList.com",
          value:
            "You can vote for the bot on [DiscordBotList.com](https://discordbotlist.com/bots/server-backuper/upvote)!",
        },
        {
          name: "Discord Boats",
          value:
            "You can vote for the bot on [Discord Boats](https://discord.boats/bot/797792817983389726/vote)!",
        },
      ],
      footer: {
        text: `Requested by ${message.author.tag}`,
      },
    };
    message.channel.send({
      embeds: [embed],
    });
  },
};
