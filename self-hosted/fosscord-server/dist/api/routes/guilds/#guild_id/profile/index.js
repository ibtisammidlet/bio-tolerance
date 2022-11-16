"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.patch("/:member_id", (0, api_1.route)({ body: "MemberChangeProfileSchema" }), async (req, res) => {
    let { guild_id, member_id } = req.params;
    if (member_id === "@me")
        member_id = req.user_id;
    const body = req.body;
    let member = await util_1.Member.findOneOrFail({ where: { id: req.user_id, guild_id }, relations: ["roles", "user"] });
    if (body.banner)
        body.banner = await (0, util_1.handleFile)(`/guilds/${guild_id}/users/${req.user_id}/avatars`, body.banner);
    member = await util_1.OrmUtils.mergeDeep(member, body);
    await member.save();
    // do not use promise.all as we have to first write to db before emitting the event to catch errors
    await (0, util_1.emitEvent)({
        event: "GUILD_MEMBER_UPDATE",
        guild_id,
        data: { ...member, roles: member.roles.map((x) => x.id) }
    });
    res.json(member);
});
exports.default = router;
//# sourceMappingURL=index.js.map