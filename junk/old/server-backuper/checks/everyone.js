async function checkForEveryone(guild, fix = false) {
  if (guild.roles.everyone.permissions.has("MENTION_EVERYONE")) {
    if (fix) {
      const rolePermissions =
        guild.roles.everyone.permissions.remove("MENTION_EVERYONE");
      await guild.roles.everyone.setPermissions(rolePermissions);
    }
    return [
      {
        severity: "warn",
        code: "EVERYONE_PING",
        name: "Everyone can ping everyone/here/roles",
        description:
          "Everyone can ping everyone/here/other roles, making your server easy to raid.",
        problemSource: guild.roles.everyone,
        fixed: !!fix,
        fixable: true,
      },
    ];
  }
  return [];
}

module.exports = checkForEveryone;
