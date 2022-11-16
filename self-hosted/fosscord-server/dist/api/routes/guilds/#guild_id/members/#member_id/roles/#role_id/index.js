"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.delete("/", (0, api_1.route)({ permission: "MANAGE_ROLES" }), async (req, res) => {
    const { guild_id, role_id, member_id } = req.params;
    await util_1.Member.removeRole(member_id, guild_id, role_id);
    res.sendStatus(204);
});
router.put("/", (0, api_1.route)({ permission: "MANAGE_ROLES" }), async (req, res) => {
    const { guild_id, role_id, member_id } = req.params;
    await util_1.Member.addRole(member_id, guild_id, role_id);
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=index.js.map