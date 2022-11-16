// Constants

const SCORE = 0.965;

// End constants

// require("dotenv").config();

const threadIt = require("discord-threads");

const fs = require("fs");

const fsp = fs.promises;
if (!fs.existsSync("db")) {
  fs.mkdirSync("db");
} else if (!fs.statSync("db").isDirectory()) {
  throw new Error("`db` exists and is not a directory. Aborting.");
} else {
  fs.closeSync(fs.openSync("db/reputation.sqlite"));
}
if (!fs.existsSync("data")) {
  throw new Error("`data` does not exist.");
} else if (!fs.statSync("db").isDirectory()) {
  throw new Error("`data` is not a directory.");
}

const sqlite3 = require("sqlite3").verbose();
const brain = require("brain.js");
const Discord = require("discord.js");
const level = require("level-party");
const argv = require("minimist")(process.argv);
const tryToCatch = require("try-to-catch");
const config = require("./configuration.json");
const reputationManager = require("./reputation");
const actionsScores = require("./data/actionsScores.json");

const db = new sqlite3.Database("db/reputation.sqlite");
const whitelist = level("db/whitelist/");
const languageDB = level("db/language/");
const punishmentsDB = level("db/punishments/");
const generalDB = level("db/general/");
// const stats = level("db/stats/");

const allowedActions = [
  "INVITE_CREATE",
  "BOT_ADD",
  "MEMBER_ADD",
  "EMOJI_CREATE",
  "EMOJI_DELETE",
  "EMOJI_UPDATE",
  "MEMBER_MOVE",
  "MEMBER_UPDATE",
  "MEMBER_DISCONNECT",
];

const up = Date.now();
// const fetch = require('node-fetch');
const load = Date.now();

const client = new Discord.Client({
  messageEditHistoryMaxSize: 10,
  disableMentions: "everyone",
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  presence: {
    status: "idle",
    afk: true,
    activities: [
      {
        type: "WATCHING",
        name: "🕑 Booting, should not take longer than a minute.",
      },
    ],
  },
});

/*
setInterval(() => {
  console.debug(stats);
  stats.set(
    `instance-${process.env.INSTANCE || 1}.serverCount`,
    client.guilds.cache.size
  );
  stats.set(
    `instance-${process.env.INSTANCE || 1}.memberCount`,
    client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount)
  );
}, 60 * 1000);
*/
threadIt(client);

client.commands = new Discord.Collection();

const neuralNetwork = new brain.NeuralNetwork();
neuralNetwork.fromJSON(require("./data/net.json"));

console.log(`Loaded dependencies in ${Date.now() - load} millliseconds!`);

// var BRUH = {};

/**
 *
 * @param {Discord.Guild} guild
 */

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
// const disabledCommands = String(argv['disable-commands'] || '').split(', ').join().split(',');

// eslint-disable-next-line no-restricted-syntax
for (const file of commandFiles) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const command = require(`./commands/${file}`);
  // if (disabledCommands.includes(command.name)) continue; // Debug
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

/**
 *
 * @param {String} action
 */

function getActionScore(action) {
  return actionsScores[action] || 0.4;
}

/**
 *
 * @param {Discord.Role} role
 */

function getRoleScore(role) {
  let score = 0.3;
  if (role.permissions.any("ADMINISTRATOR")) {
    return 1;
  }
  if (
    role.permissions.any(["BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_CHANNELS"])
  ) {
    score += 0.25;
  }
  if (role.permissions.any("MANAGE_ROLES")) {
    score += 0.15;
  }
  if (role.permissions.any(["MANAGE_GUILD", "MANAGE_MESSAGES"])) {
    score += 0.1;
  }
  if (
    role.permissions.any("BAN_MEMBERS") ||
    role.permissions.any("KICK_MEMBERS")
  ) {
    score += 0.25;
  }
  if (role.permissions.any("MANAGE_CHANNELS")) {
    score += 0.25;
  }
  if (role.permissions.any("MANAGE_ROLES")) {
    score += 0.15;
  }
  if (role.permissions.any("MANAGE_GUILD")) {
    score += 0.1;
  }
  if (role.permissions.any("MANAGE_MESSAGES")) {
    score += 0.1;
  }

  return score;
}

/**
 * @param {Discord.Guild} guild
 */
async function recognize(guild) {
  // backup(guild);
  if (argv.protection === false) return 0;
  if (!guild) return 0;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 100,
  });
  const action = fetchedLogs.entries.first();
  if (
    action.executor.id === client.user.id ||
    action.executor.id === guild.ownerId
  )
    return 0;
  if (allowedActions.includes(fetchedLogs.entries.first().action)) return 0;
  try {
    await whitelist.get(`${guild.id}.${action.executor.id}`);
    return 0;
  } catch {
    // Nothing
  }
  const serverOwner = await guild.fetchOwner();
  let punishment;
  try {
    punishment = await punishmentsDB.get(guild.id);
  } catch {
    punishment = "none";
  }
  const runData = {};
  if (action.targetType === "USER") {
    runData.victimReputation = await reputationManager.getReputation(
      action.target.id,
      guild.id,
      db
    );
  }
  runData.reputation = await reputationManager.getReputation(
    action.executor.id,
    guild.id,
    db
  );
  runData.actionScore = getActionScore(action.action);
  let confidence = null;
  confidence = confidence > 1 ? 0.65 : confidence;
  switch (action.targetType) {
    case "CHANNEL": {
      if (Date.now() - action.target.createdTimestamp < 60000) {
        confidence = 0.1;
      } else if (Date.now() - action.target.createdTimestamp < 300000) {
        confidence = 0.2;
      } else if (Date.now() - action.target.createdTimestamp < 600000) {
        confidence = 0.3;
      } else {
        confidence = neuralNetwork.run(runData).confidence;
      }
      break;
    }
    default: {
      confidence = neuralNetwork.run(runData).confidence;
      confidence = confidence > 1 ? 0.65 : confidence;
      break;
    }
  }
  const actionCount = fetchedLogs.entries.filter(
    (e) =>
      e.executor.id === action.executor.id &&
      Date.now() - e.createdTimestamp <= 1000 * 60 * 7
  ).size;
  console.log("Action count:", actionCount);
  let toMultiplyConfidence = Math.min(Math.max(actionCount / 3, 1), 7);
  // eslint-disable-next-line no-restricted-globals
  toMultiplyConfidence = isFinite(toMultiplyConfidence)
    ? toMultiplyConfidence
    : 1;
  confidence *= toMultiplyConfidence;
  // console.log(
  //   confidence,
  //   SCORE,
  //   await reputationManager.getReputation(action.executor.id, guild.id, db),
  //   await reputationManager.getReputation(action.target.id, guild.id, db)
  // );
  if (confidence >= SCORE) {
    if (confidence - SCORE > 0.25) {
      switch (punishment) {
        case "ban": {
          const member = await guild.members.fetch({
            user: fetchedLogs.entries.first().executor,
          });
          await member.ban({
            reason: "Anti-raid",
          });
          break;
        }

        case "kick": {
          const member = await guild.members.fetch({
            user: fetchedLogs.entries.first().executor,
          });
          await member.kick("Anti-raid");
          break;
        }

        default: {
          // No punishment
          break;
        }
      }
    }
    const embed = {
      title: "<:warning:869253051339403294> Attention!",
      description: `:boom: Detected destructive activity in **${guild.name}**! Type of activity is **${action.action}**. The action was done by **${action.executor.tag}**.`,
      color: 14895693,
      thumbnail: {
        url: "https://cdn.discordapp.com/avatars/797792817983389726/c37f92aa872ea449ff88450818cac325.png?size=256",
      },
      timestamp: Date.now(),
    };
    const toSend =
      guild.channels.cache.find((c) => c.name === "sb-alerts" && c.isText()) ||
      serverOwner;
    toSend.send({
      embeds: [embed],
    });
    const totalRaids = parseInt(await fsp.readFile("accidents.txt"), 10);
    await fsp.writeFile("accidents.txt", String(totalRaids + 1));
    await reputationManager.adjustReputation(
      action.executor.id,
      guild.id,
      confidence,
      SCORE,
      fetchedLogs.entries.filter((e) => e.executor.id === action.executor.id)
        .size,
      db
    );
  }
  return confidence;
}

client.on("ready", async () => {
  let userCount = 0;
  client.guilds.cache.forEach((g) => {
    userCount += g.memberCount;
  });
  await client.user.setStatus("idle");
  await client.user.setActivity(
    `Protecting ${client.guilds.cache.size} servers and ${userCount} members! 😎`
  );
  setInterval(async () => {
    let userCount2 = 0;
    client.guilds.cache.forEach((g) => {
      userCount2 += g.memberCount;
    });
    await client.user.setStatus("idle");
    await client.user.setActivity(
      `Protecting ${client.guilds.cache.size} servers and ${userCount2} members! 😎`
    );
  }, 60000);
  console.log(`Connected in ${Date.now() - up} milliseconds!`);
});

client.on("messageCreate", async (message) => {
  /**
   * @type {string}
   */
  const prefix =
    (message.guild
      ? (
          await tryToCatch(
            generalDB.get.bind(generalDB),
            `${message.guild.id}.p`
          )
        )[1]
      : config.prefix) || config.prefix;

  if (
    message.content.startsWith(`<@${client.user.id}>`) ||
    message.content.startsWith(`<@!${client.user.id}>`)
  ) {
    const embed = {
      title: "My prefix",
      description: `My prefix is **${prefix}**`,
      color: 14895693,
      thumbnail: {
        url: "https://cdn.discordapp.com/avatars/797792817983389726/c37f92aa872ea449ff88450818cac325.png?size=256",
      },
      footer: {
        text: `Requested by ${message.author.tag}`,
      },
    };
    message.channel.send({
      embeds: [embed],
    });
    return;
  }
  if (
    !(
      (
        message.content.startsWith(prefix) ||
        message.content.startsWith(`${prefix} `)
      )
      // message.content.startsWith(client.user.toString())
    ) ||
    message.author.bot
  )
    return;

  const args = message.content.slice(prefix.length).trimStart().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  // If command exist
  if (!command) return;

  // Check if command can be executed in DM
  if (command.guildOnly && !message.guild) {
    message.reply("I can't execute that command inside DMs!");
    return;
  }

  // Check if args are required
  if (command.args && !args.length) {
    let reply = `Please provide arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    message.channel.send({ content: reply });
    return;
  }

  // Check if user is in cooldown
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 0) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      // If user is in cooldown
      const timeLeft = (expirationTime - now) / 1000;
      message.reply(
        `Please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  } else {
    timestamps.set(message.author.id, now);
    setTimeout(() => {
      timestamps.delete(message.author.id);
    }, cooldownAmount);
    // Execute command
    let language;
    try {
      language = await languageDB.get(message.guild?.id);
    } catch {
      language = "en";
    }

    try {
      process.nextTick(async () => {
        command.execute.bind({
          whitelist,
          client,
          languageDB,
          language: language || "en",
          punishments: punishmentsDB,
          settings: generalDB,
        })(message, args);
      });
    } catch (error) {
      console.error(error);
      if (!client.application?.owner) await client.application.fetch();
      message.reply(
        "There was an error while trying to execute that command! " +
          `Please report it to ${
            client.application?.owner.owner?.user.tag ||
            client.application?.owner.tag
          }!`
      );
    }
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS reputation (user INT, reputation INT, guild INT)",
    () => {
      client.login(process.env.TOKEN);
    }
  );
});

async function shouldBeRestored(guild) {
  return (
    (await tryToCatch(generalDB.get.bind(generalDB), `${guild?.id}.r`))[1] ===
    "on"
  );
}

// Don't mind

client.on("channelCreate", async (channel) => {
  try {
    const shouldRestore = await shouldBeRestored(channel.guild);
    const confidence = await recognize(channel.guild);
    if (confidence - SCORE >= 0.15 && shouldRestore) {
      await channel.delete();
    }
  } catch {
    // TODO Add logging
  }
});

client.on("channelDelete", async (c) => {
  if (!(c instanceof Discord.GuildChannel)) return;
  try {
    const shouldRestore = await shouldBeRestored(c.guild);
    const confidence = await recognize(c.guild);
    if (!(confidence - SCORE >= 0.15 && shouldRestore)) return;
    console.log(SCORE, confidence, confidence - SCORE >= 0.15, shouldRestore);
    /**
     * Channel we created
     * @type {Discord.GuildChannel}
     */
    const channel = await c.guild.channels.create(c.name, {
      type: c.type,
      topic: c.topic,
      nsfw: c.nsfw,
      parent: c.parent,
      bitrate: c.bitrate,
      userLimit: c.userLimit,
      rateLimitPerUser: c.rateLimitPerUser,
      permissionOverwrites: c.permissionOverwrites.cache,
      position: c.rawPosition,
      reason: "Restoring",
    });

    await channel.edit(
      {
        lockPermissions: c.permissionsLocked,
        defaultAutoArchiveDuration: c.defaultAutoArchiveDuration,
        rtcRegion: c.rtcRegion,
        bitrate: c.bitrate,
      },
      "Restoring"
    );
  } catch {
    // TODO Add logging
  }
});

// client.on("channelPinsUpdate", function (channel, _time) {
//   recognize(channel.guild);
// });

// eslint-disable-next-line no-unused-vars
client.on("channelUpdate", async (c, nc) => {
  if (!(c instanceof Discord.GuildChannel)) return;
  if (!(nc instanceof Discord.GuildChannel)) return;
  try {
    const confidence = await recognize(c.guild);
    const shouldRestore = await shouldBeRestored(c.guild);
    if (!(confidence - SCORE >= 0.15 && shouldRestore)) return;
    await nc.edit(
      {
        bitrate: c.bitrate,
        defaultAutoArchiveDuration: c.defaultAutoArchiveDuration,
        lockPermissions: c.permissionsLocked,
        name: c.name,
        nsfw: c.nsfw || nc.nsfw,
        parent: c.parent,
        permissionOverwrites: c.permissionOverwrites.cache,
        position: c.rawPosition,
        rateLimitPerUser: c.rateLimitPerUser,
        rtcRegion: c.rtcRegion,
        topic: c.topic,
        type: c.type,
        userLimit: c.userLimit,
      },
      "Restoring"
    );
  } catch {
    // TODO Add logging
  }
});

client.on("guildBanAdd", async (ban) => {
  try {
    const shouldRestore = await shouldBeRestored(ban.guild);
    const confidence = await recognize(ban.guild);
    if (!(confidence - SCORE >= 0.15 && shouldRestore)) return;
    ban.guild.bans.remove(ban.user, "Restoring");
  } catch {
    // TODO Add logging
  }
});

// client.on("guildBanRemove", (guild) => {
//   recognize(guild).catch(() => {});
// });

client.on("guildMemberRemove", (member) => {
  recognize(member.guild).catch(() => {});
});

// client.on("guildMemberUpdate", function (oldMember, _newMember) {
//   recognize(oldMember.guild);
// });

client.on("guildUpdate", async (g, ng) => {
  try {
    const confidence = await recognize(g);
    const shouldRestore = await shouldBeRestored(g);
    if (!(confidence - SCORE >= 0.15 && shouldRestore)) return;
    await ng.edit({
      afkChannel: g.afkChannel,
      banner: g.banner,
      afkTimeout: g.afkTimeout,
      defaultMessageNotifications: g.defaultMessageNotifications,
      description: g.description,
      discoverySplash: g.discoverySplash,
      explicitContentFilter: g.explicitContentFilter,
      features: g.features,
      icon: g.icon,
      name: g.name,
      owner: g.owner,
      preferredLocale: g.preferredLocale,
      publicUpdatesChannel: g.publicUpdatesChannel,
      rulesChannel: g.rulesChannel,
      splash: g.splash,
      systemChannel: g.systemChannel,
      systemChannelFlags: g.systemChannelFlags,
      verificationLevel: g.verificationLevel,
    });
  } catch {
    // TODO Add logging
  }
});

client.on("messageDeleteBulk", (messages) => {
  if (messages.size > 15) {
    recognize(messages.first().guild).catch(() => {});
  }
});

client.on("roleCreate", async (role) => {
  try {
    const shouldRestore = await shouldBeRestored(role.guild);
    const confidence = await recognize(role.guild);
    if (
      !(
        confidence - SCORE >= 0.15 &&
        shouldRestore &&
        getRoleScore(role) > 0.3 &&
        !role.managed
      )
    )
      return;
    await role.delete();
  } catch {
    // TODO Add logging
  }
});

client.on("roleDelete", async (r) => {
  try {
    const shouldRestore = await shouldBeRestored(r.guild);
    const confidence = await recognize(r.guild);
    if (
      !(
        confidence - SCORE >= 0.15 &&
        shouldRestore &&
        getRoleScore(r) > 0.3 &&
        !r.managed
      )
    )
      return;
    await r.guild.roles.create({
      color: r.color,
      hoist: r.hoist,
      mentionable: r.mentionable,
      name: r.name,
      permissions: r.permissions,
      position: r.rawPosition,
      reason: "Restoring",
    });
  } catch {
    // TODO Add logging
  }
});

client.on("roleUpdate", async (r, nr) => {
  try {
    const shouldRestore = await shouldBeRestored(r.guild);
    const confidence = await recognize(r.guild);
    if (
      !(
        confidence - SCORE >= 0.15 &&
        shouldRestore &&
        getRoleScore(r) > 0.3 &&
        !r.managed
      )
    )
      return;
    await nr.edit({
      color: r.color,
      hoist: r.hoist,
      mentionable: r.mentionable,
      name: r.name,
      permissions: r.permissions,
      position: r.rawPosition,
      reason: "Restoring",
    });
  } catch {
    // TODO Add logging
  }
});
