const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const { l } = require("../localize");

const toUse = fs.readdirSync(path.join(__dirname, "../checks")).map((file) =>
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(path.resolve(__dirname, "../checks", file))
);

async function check(guild, fix = false, message) {
  let result = [];

  for (let i = 0; i < toUse.length; i += 1) {
    const checker = toUse[i];
    try {
      // eslint-disable-next-line no-await-in-loop
      const problems = (await checker(guild, fix)).filter((p) => p);
      result = result.concat(problems);
    } catch (e) {
      console.error(e);
    }
  }

  const embed = {
    title: ":eyes: ｜ Check results",
    color: 14895693,
    thumbnail: {
      url: "https://cdn.discordapp.com/avatars/797792817983389726/c37f92aa872ea449ff88450818cac325.png?size=256",
    },
    timestamp: Date.now(),
    fields: result.map((problem) => {
      let icon;
      switch (problem.severity) {
        case "high": {
          icon = ":rotating_light:";
          break;
        }
        case "warn": {
          icon = ":warning:";
          break;
        }
        case "suggestion": {
          icon = ":question:";
          break;
        }
        default: {
          icon = "";
          break;
        }
      }
      return {
        name: `${icon ? `${icon} ｜ ` : ""}${problem.name}`,
        value: `${`**Severity:** ${
          problem.severity.slice(0, 1).toUpperCase() + problem.severity.slice(1)
        }\n**Problem source:** ${problem.problemSource}`}${
          problem.description ? `\n**Description:** ${problem.description}` : ""
        }${
          fix
            ? `\n**Fixed:** ${
                problem.fixed
                  ? "<:yes:875018868232454204>"
                  : "<:no:875018868458922074>"
              }`
            : ""
        }`,
        footer: message?.author.tag
          ? {
              text: l("requestedBy", this.language, {
                tag: message.author.tag,
              }),
            }
          : undefined,
      };
    }),
  };

  return { raw: result, embed };
}

module.exports = {
  name: "check",
  aliases: ["check-server"],
  description: "Checks your server settings for problems",
  category: "security",
  guildOnly: true,
  // cooldown: 3,
  /**
   *
   * @param {Discord.Message} message
   */
  async execute(message) {
    if (
      !(
        message.member.permissions.has("MANAGE_GUILD") ||
        message.member.permissions.has("MANAGE_ROLES")
      ) &&
      message.author.id !== "723971496107573328"
    ) {
      message.reply(
        'You must have "manage guild" or "manage roles" permission to use this command!'
      );
      return;
    }
    const button = new Discord.MessageButton()
      .setCustomId("fix")
      .setLabel("Fix")
      .setStyle("SUCCESS");

    const disabledButton = new Discord.MessageButton()
      .setCustomId("fix")
      .setLabel("Fix")
      .setStyle("SUCCESS")
      .setDisabled(true);
    const row = new Discord.MessageActionRow().addComponents(button);
    const disabledRow = new Discord.MessageActionRow().addComponents(
      disabledButton
    );
    const checkResult = await check(message.guild, false, message);
    const myMessage = await message.reply({
      embeds: [checkResult.embed],
      components: checkResult.raw.some((p) => p.fixable)
        ? [row]
        : [disabledRow],
      ephemeral: true,
    });

    const filter = (i) =>
      i.customId === "fix" && i.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({
      filter,
      time: 1 * 60 * 1000,
    });

    collector.on(
      "collect",
      /**
       *
       * @param {Discord.MessageComponentInteraction} interaction
       */
      async (buttonInteraction) => {
        const fixResult = await check(message.guild, true, message);
        await myMessage.edit({
          embeds: [
            {
              title: ":eyes: ｜ Check results",
              color: 14895693,
              thumbnail: {
                url: "https://cdn.discordapp.com/avatars/797792817983389726/c37f92aa872ea449ff88450818cac325.png?size=256",
              },
              timestamp: Date.now(),
              fields: checkResult.raw.map((problem) => {
                let icon;
                switch (problem.severity) {
                  case "high": {
                    icon = ":rotating_light:";
                    break;
                  }
                  case "warn": {
                    icon = ":warning:";
                    break;
                  }
                  default: {
                    icon = "";
                    break;
                  }
                }

                const maybeFixedProblem = fixResult.raw.find(
                  (p) => p.code === problem.code
                );

                return {
                  name: `${icon ? `${icon} ｜ ` : ""}${problem.name}`,
                  value: `${
                    `**Severity:** ${problem.severity}\n` +
                    `**Problem source:** ${problem.problemSource}`
                  }${
                    problem.description
                      ? `\n**Description:** ${problem.description}`
                      : ""
                  }\n**Fixed:** ${
                    maybeFixedProblem?.fixed ?? true
                      ? "<:yes:875018868232454204>"
                      : "<:no:875018868458922074>"
                  }`,
                };
              }),
            },
          ],
          components: [disabledRow],
          ephemeral: true,
        });
        try {
          buttonInteraction.deferUpdate();
        } catch {
          // Nothing to do here.
        }
      }
    );
  },
};
