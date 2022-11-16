"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id, member_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    const member = await util_1.Member.findOneOrFail({ where: { id: member_id, guild_id } });
    return res.json(member);
});
router.patch("/", (0, api_1.route)({ body: "MemberChangeSchema" }), async (req, res) => {
    let { guild_id, member_id } = req.params;
    if (member_id === "@me")
        member_id = req.user_id;
    const body = req.body;
    let member = await util_1.Member.findOneOrFail({ where: { id: member_id, guild_id }, relations: ["roles", "user"] });
    const permission = await (0, util_1.getPermission)(req.user_id, guild_id);
    const everyone = await util_1.Role.findOneOrFail({ where: { guild_id: guild_id, name: "@everyone", position: 0 } });
    if (body.roles) {
        permission.hasThrow("MANAGE_ROLES");
        if (body.roles.indexOf(everyone.id) === -1)
            body.roles.push(everyone.id);
        member.roles = body.roles.map((x) => util_1.OrmUtils.mergeDeep(new util_1.Role(), { id: x })); // foreign key constraint will fail if role doesn't exist
    }
    if (body.avatar)
        body.avatar = await (0, util_1.handleFile)(`/guilds/${guild_id}/users/${member_id}/avatars`, body.avatar);
    member = await util_1.OrmUtils.mergeDeep(member, body);
    await member.save();
    member.roles = member.roles.filter((x) => x.id !== everyone.id);
    // do not use promise.all as we have to first write to db before emitting the event to catch errors
    await (0, util_1.emitEvent)({
        event: "GUILD_MEMBER_UPDATE",
        guild_id,
        data: { ...member, roles: member.roles.map((x) => x.id) }
    });
    res.json(member);
});
router.put("/", (0, api_1.route)({}), async (req, res) => {
    // TODO: Lurker mode
    const rights = await (0, util_1.getRights)(req.user_id);
    let { guild_id, member_id } = req.params;
    if (member_id === "@me") {
        member_id = req.user_id;
        rights.hasThrow("JOIN_GUILDS");
    }
    else {
        // TODO: join others by controller
    }
    let guild = await util_1.Guild.findOneOrFail({
        where: { id: guild_id }
    });
    let emoji = await util_1.Emoji.find({
        where: { guild_id: guild_id }
    });
    let roles = await util_1.Role.find({
        where: { guild_id: guild_id }
    });
    let stickers = await util_1.Sticker.find({
        where: { guild_id: guild_id }
    });
    await util_1.Member.addToGuild(member_id, guild_id);
    res.send({ ...guild, emojis: emoji, roles: roles, stickers: stickers });
});
router.delete("/", (0, api_1.route)({}), async (req, res) => {
    const permission = await (0, util_1.getPermission)(req.user_id);
    const rights = await (0, util_1.getRights)(req.user_id);
    const { guild_id, member_id } = req.params;
    if (member_id !== "@me" || member_id === req.user_id) {
        // TODO: unless force-joined
        rights.hasThrow("SELF_LEAVE_GROUPS");
    }
    else {
        rights.hasThrow("KICK_BAN_MEMBERS");
        permission.hasThrow("KICK_MEMBERS");
    }
    await util_1.Member.removeFromGuild(member_id, guild_id);
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=index.js.map