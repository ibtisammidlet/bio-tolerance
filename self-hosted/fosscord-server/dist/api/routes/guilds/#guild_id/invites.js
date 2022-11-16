"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({ permission: "MANAGE_GUILD" }), async (req, res) => {
    const { guild_id } = req.params;
    const invites = await util_1.Invite.find({ where: { guild_id }, relations: util_1.PublicInviteRelation });
    return res.json(invites);
});
exports.default = router;
//# sourceMappingURL=invites.js.map