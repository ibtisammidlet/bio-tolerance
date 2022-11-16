function checkForRoleHierarchyProblems(guild) {
  const problems = guild.roles.cache.filter((role) => {
    if (!role.permissions.has("MANAGE_ROLES")) return false;
    const rolePermissions = role.permissions.toArray();
    const hasProblems = guild.roles.cache.some(
      (r) =>
        !r.managed &&
        r.position < role.position &&
        r.permissions.toArray().some((p) => !rolePermissions.includes(p))
    );
    return hasProblems;
  });
  return problems.map((role) => ({
    severity: "high",
    code: "ROLE_PRIVILEGE_ESCALATION",
    name: "Privilege escalation through roles",
    description:
      "This happens when a role with manage roles permission has roles with " +
      "more permissions under it. Such problem can cause privilege escalation.",
    problemSource:
      `Members with ${role} (or its application) have ` +
      "roles below with more privileges",
    fixed: false,
    fixable: false,
  }));
}

module.exports = checkForRoleHierarchyProblems;
