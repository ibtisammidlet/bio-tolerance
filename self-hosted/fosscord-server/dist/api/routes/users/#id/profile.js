"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({ test: { response: { body: "UserProfileResponse" } } }), async (req, res) => {
    if (req.params.id === "@me")
        req.params.id = req.user_id;
    const { guild_id, with_mutual_guilds } = req.query;
    const user = await util_1.User.getPublicUser(req.params.id, { relations: ["connected_accounts"] });
    var mutual_guilds = [];
    var premium_guild_since;
    if (with_mutual_guilds == "true") {
        const requested_member = await util_1.Member.find({ where: { id: req.params.id } });
        const self_member = await util_1.Member.find({ where: { id: req.user_id } });
        for (const rmem of requested_member) {
            if (rmem.premium_since) {
                if (premium_guild_since) {
                    if (premium_guild_since > rmem.premium_since) {
                        premium_guild_since = rmem.premium_since;
                    }
                }
                else {
                    premium_guild_since = rmem.premium_since;
                }
            }
            for (const smem of self_member) {
                if (smem.guild_id === rmem.guild_id) {
                    mutual_guilds.push({ id: rmem.guild_id, nick: rmem.nick });
                }
            }
        }
    }
    const guild_member = guild_id && typeof guild_id == "string"
        ? await util_1.Member.findOneOrFail({ where: { id: req.params.id, guild_id: guild_id }, relations: ["roles"] })
        : undefined;
    // TODO: make proper DTO's in util?
    const userDto = {
        username: user.username,
        discriminator: user.discriminator,
        id: user.id,
        public_flags: user.public_flags,
        avatar: user.avatar,
        accent_color: user.accent_color,
        banner: user.banner,
        bio: req.user_bot ? null : user.bio,
        bot: user.bot
    };
    const userProfile = {
        bio: req.user_bot ? null : user.bio,
        accent_color: user.accent_color,
        banner: user.banner
    };
    const guildMemberDto = guild_member
        ? {
            avatar: guild_member.avatar,
            banner: guild_member.banner,
            bio: req.user_bot ? null : guild_member.bio,
            communication_disabled_until: guild_member.communication_disabled_until,
            deaf: guild_member.deaf,
            flags: user.flags,
            is_pending: guild_member.pending,
            pending: guild_member.pending,
            joined_at: guild_member.joined_at,
            mute: guild_member.mute,
            nick: guild_member.nick,
            premium_since: guild_member.premium_since,
            roles: guild_member.roles.map((x) => x.id).filter((id) => id != guild_id),
            user: userDto
        }
        : undefined;
    const guildMemberProfile = {
        accent_color: null,
        banner: guild_member?.banner || null,
        bio: guild_member?.bio || "",
        guild_id
    };
    res.json({
        connected_accounts: user.connected_accounts,
        premium_guild_since: premium_guild_since,
        premium_since: user.premium_since,
        mutual_guilds: mutual_guilds,
        user: userDto,
        user_profile: userProfile,
        guild_member: guild_id && guildMemberDto,
        guild_member_profile: guild_id && guildMemberProfile
    });
});
router.patch("/", (0, api_1.route)({ body: "UserProfileModifySchema" }), async (req, res) => {
    const body = req.body;
    if (body.banner)
        body.banner = await (0, util_1.handleFile)(`/banners/${req.user_id}`, body.banner);
    let user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: [...util_1.PrivateUserProjection, "data"] });
    user = util_1.OrmUtils.mergeDeep(user, body);
    await user.save();
    // @ts-ignore
    delete user.data;
    // TODO: send update member list event in gateway
    await (0, util_1.emitEvent)({
        event: "USER_UPDATE",
        user_id: req.user_id,
        data: user
    });
    res.json({
        accent_color: user.accent_color,
        bio: user.bio,
        banner: user.banner
    });
});
exports.default = router;
//# sourceMappingURL=profile.js.map