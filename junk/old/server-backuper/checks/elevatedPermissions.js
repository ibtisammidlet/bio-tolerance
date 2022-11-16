const elevatedPermissions = [
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "ADMINISTRATOR",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "MANAGE_MESSAGES",
  "MANAGE_ROLES",
  "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS_AND_STICKERS",
  "MANAGE_THREADS",
  "MANAGE_NICKNAMES",
  "VIEW_GUILD_INSIGHTS",
  "VIEW_AUDIT_LOG",
];

async function checkForElevatedPermissions(guild, fix = false) {
  if (guild.roles.everyone.permissions.any(elevatedPermissions)) {
    if (fix) {
      const rolePermissions =
        guild.roles.everyone.permissions.remove(elevatedPermissions);
      await guild.roles.everyone.setPermissions(rolePermissions);
    }
    return [
      {
        severity: "high",
        code: "ADMIN_PERMISSIONS_FOR_EVERYONE",
        name: "Admin permissions for @everyone",
        description:
          'Everyone role has admin permissions (such as "administrator" or "ban members")',
        problemSource: guild.roles.everyone,
        fixed: !!fix,
        fixable: true,
      },
    ];
  }
  return [];
}

module.exports = checkForElevatedPermissions;
