"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
const InviteRegex = /\W/g;
router.get("/", (0, api_1.route)({ permission: "MANAGE_GUILD" }), async (req, res) => {
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    if (!guild.features.includes("ALIASABLE_NAMES")) {
        const invite = await util_1.Invite.findOne({ where: { guild_id: guild_id, vanity_url: true } });
        if (!invite)
            return res.json({ code: null });
        return res.json({ code: invite.code, uses: invite.uses });
    }
    else {
        const invite = await util_1.Invite.find({ where: { guild_id: guild_id, vanity_url: true } });
        if (!invite || invite.length == 0)
            return res.json({ code: null });
        return res.json(invite.map((x) => ({ code: x.code, uses: x.uses })));
    }
});
router.patch("/", (0, api_1.route)({ body: "VanityUrlSchema", permission: "MANAGE_GUILD" }), async (req, res) => {
    const { guild_id } = req.params;
    const body = req.body;
    const code = body.code?.replace(InviteRegex, "");
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    if (!guild.features.includes("VANITY_URL"))
        throw new util_1.HTTPError("Your guild doesn't support vanity urls");
    if (!code || code.length === 0)
        throw new util_1.HTTPError("Code cannot be null or empty");
    const invite = await util_1.Invite.findOne({ where: { code } });
    if (invite)
        throw new util_1.HTTPError("Invite already exists");
    const { id } = await util_1.Channel.findOneOrFail({ where: { guild_id, type: util_1.ChannelType.GUILD_TEXT } });
    await util_1.OrmUtils.mergeDeep(new util_1.Invite(), {
        vanity_url: true,
        code: code,
        temporary: false,
        uses: 0,
        max_uses: 0,
        max_age: 0,
        created_at: new Date(),
        expires_at: new Date(),
        guild_id: guild_id,
        channel_id: id
    }).save();
    return res.json({ where: { code } });
});
exports.default = router;
//# sourceMappingURL=vanity-url.js.map