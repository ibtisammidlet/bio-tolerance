/**
 *
 * @param {import("discord.js").Client} client
 * @param {any} user
 */

module.exports.resolve = async function resolveUser(client, user) {
  if (!client?.isReady())
    throw new TypeError("The client must be ready in order to look up users");
  return user.id // Check that it is a real user.
    ? user
    : undefined ||
        (await client.users.fetch(user).catch(() => {})) ||
        client.users.cache.find((u) => u.tag === user);
};

/**
 *
 * @param {import("discord.js").Client} client
 * @param {import("discord.js").GuildMember} member
 * @param {import("discord.js").PermissionResolvable} permissions
 */

module.exports.hasPermission = async function checkPermissions(
  client,
  member,
  permissions
) {
  if (!client?.isReady())
    throw new TypeError(
      "The client must be ready in order to perform advanced permission check"
    );
  if (!client.application?.owner) await client.application?.fetch();
  return (
    member.permissions.has(permissions) ||
    member.user.id ===
      (client.application?.owner.owner?.user.id || client.application?.owner.id)
  );
};

/**
 *
 * @param {import("discord.js").Client} client
 * @param {import("discord.js").User} user
 * @param {import("discord.js").Guild} guild
 */

module.exports.canExecuteGuildOwnerCommands =
  async function canExecuteGuildOwnerCommands(client, guild, user) {
    if (!client?.isReady())
      throw new TypeError(
        "The client must be ready in order to perform advanced permission check"
      );
    if (!client.application?.owner) await client.application?.fetch();
    return (
      user.id === guild.ownerId ||
      user.id ===
        (client.application?.owner.owner?.user.id ||
          client.application?.owner.id)
    );
  };
