"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
/* TODO: Deleting the secrets is just a temporary go-around. Views should be implemented for both safety and better handling. */
router.get("/", (0, api_1.route)({ permission: "BAN_MEMBERS" }), async (req, res) => {
    const { guild_id } = req.params;
    let bans = await util_1.Ban.find({ where: { guild_id } });
    let promisesToAwait = [];
    const bansObj = [];
    bans.filter((ban) => ban.user_id !== ban.executor_id); // pretend self-bans don't exist to prevent victim chasing
    bans.forEach((ban) => {
        promisesToAwait.push(util_1.User.getPublicUser(ban.user_id));
    });
    const bannedUsers = await Promise.all(promisesToAwait);
    bans.forEach((ban, index) => {
        const user = bannedUsers[index];
        bansObj.push({
            reason: ban.reason,
            user: {
                username: user.username,
                discriminator: user.discriminator,
                id: user.id,
                avatar: user.avatar,
                public_flags: user.public_flags
            }
        });
    });
    return res.json(bansObj);
});
router.get("/:user", (0, api_1.route)({ permission: "BAN_MEMBERS" }), async (req, res) => {
    const { guild_id } = req.params;
    const user_id = req.params.ban;
    let ban = (await util_1.Ban.findOneOrFail({ where: { guild_id, user_id } }));
    if (ban.user_id === ban.executor_id)
        throw util_1.DiscordApiErrors.UNKNOWN_BAN;
    // pretend self-bans don't exist to prevent victim chasing
    /* Filter secret from registry. */
    ban = ban;
    delete ban.ip;
    return res.json(ban);
});
router.put("/:user_id", (0, api_1.route)({ body: "BanCreateSchema", permission: "BAN_MEMBERS" }), async (req, res) => {
    const { guild_id } = req.params;
    const banned_user_id = req.params.user_id;
    if (req.user_id === banned_user_id && banned_user_id === req.permission.cache.guild?.owner_id)
        throw new util_1.HTTPError("You are the guild owner, hence can't ban yourself", 403);
    if (req.permission.cache.guild?.owner_id === banned_user_id)
        throw new util_1.HTTPError("You can't ban the owner", 400);
    const banned_user = await util_1.User.getPublicUser(banned_user_id);
    const ban = util_1.OrmUtils.mergeDeep(new util_1.Ban(), {
        user_id: banned_user_id,
        guild_id: guild_id,
        ip: (0, util_1.getIpAdress)(req),
        executor_id: req.user_id,
        reason: req.body.reason // || otherwise empty
    });
    await Promise.all([
        util_1.Member.removeFromGuild(banned_user_id, guild_id),
        ban.save(),
        (0, util_1.emitEvent)({
            event: "GUILD_BAN_ADD",
            data: {
                guild_id: guild_id,
                user: banned_user
            },
            guild_id: guild_id
        })
    ]);
    return res.json(ban);
});
router.put("/@me", (0, api_1.route)({ body: "BanCreateSchema" }), async (req, res) => {
    const { guild_id } = req.params;
    const banned_user = await util_1.User.getPublicUser(req.params.user_id);
    if (req.permission.cache.guild?.owner_id === req.params.user_id)
        throw new util_1.HTTPError("You are the guild owner, hence can't ban yourself", 403);
    const ban = util_1.OrmUtils.mergeDeep(new util_1.Ban(), {
        user_id: req.params.user_id,
        guild_id: guild_id,
        ip: (0, util_1.getIpAdress)(req),
        executor_id: req.params.user_id,
        reason: req.body.reason // || otherwise empty
    });
    await Promise.all([
        util_1.Member.removeFromGuild(req.user_id, guild_id),
        ban.save(),
        (0, util_1.emitEvent)({
            event: "GUILD_BAN_ADD",
            data: {
                guild_id: guild_id,
                user: banned_user
            },
            guild_id: guild_id
        })
    ]);
    return res.json(ban);
});
router.delete("/:user_id", (0, api_1.route)({ permission: "BAN_MEMBERS" }), async (req, res) => {
    const { guild_id, user_id } = req.params;
    let ban = await util_1.Ban.findOneOrFail({ where: { guild_id, user_id } });
    if (ban.user_id === ban.executor_id)
        throw util_1.DiscordApiErrors.UNKNOWN_BAN;
    // make self-bans irreversible and hide them from view to avoid victim chasing
    const banned_user = await util_1.User.getPublicUser(user_id);
    await Promise.all([
        util_1.Ban.delete({
            user_id: user_id,
            guild_id
        }),
        (0, util_1.emitEvent)({
            event: "GUILD_BAN_REMOVE",
            data: {
                guild_id,
                user: banned_user
            },
            guild_id
        })
    ]);
    return res.status(204).send();
});
exports.default = router;
//# sourceMappingURL=bans.js.map