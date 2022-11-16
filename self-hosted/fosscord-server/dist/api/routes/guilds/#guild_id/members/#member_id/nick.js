"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.patch("/", (0, api_1.route)({ body: "MemberNickChangeSchema" }), async (req, res) => {
    let { guild_id, member_id } = req.params;
    let permissionString = "MANAGE_NICKNAMES";
    if (member_id === "@me") {
        member_id = req.user_id;
        permissionString = "CHANGE_NICKNAME";
    }
    const perms = await (0, util_1.getPermission)(req.user_id, guild_id);
    perms.hasThrow(permissionString);
    await util_1.Member.changeNickname(member_id, guild_id, req.body.nick);
    res.status(200).send();
});
exports.default = router;
//# sourceMappingURL=nick.js.map