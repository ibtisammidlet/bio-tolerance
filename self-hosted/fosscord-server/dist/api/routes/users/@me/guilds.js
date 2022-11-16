"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const members = await util_1.Member.find({ relations: ["guild"], where: { id: req.user_id } });
    let guild = members.map((x) => x.guild);
    if ("with_counts" in req.query && req.query.with_counts == "true") {
        guild = []; // TODO: Load guilds with user role permissions number
    }
    res.json(guild);
});
// user send to leave a certain guild
router.delete("/:guild_id", (0, api_1.route)({}), async (req, res) => {
    const { autoJoin } = util_1.Config.get().guild;
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id }, select: ["owner_id"] });
    if (!guild)
        throw new util_1.HTTPError("Guild doesn't exist", 404);
    if (guild.owner_id === req.user_id)
        throw new util_1.HTTPError("You can't leave your own guild", 400);
    if (autoJoin.enabled && autoJoin.guilds.includes(guild_id) && !autoJoin.canLeave) {
        throw new util_1.HTTPError("You can't leave instance auto join guilds", 400);
    }
    await Promise.all([
        util_1.Member.delete({ id: req.user_id, guild_id: guild_id }),
        (0, util_1.emitEvent)({
            event: "GUILD_DELETE",
            data: {
                id: guild_id
            },
            user_id: req.user_id
        })
    ]);
    const user = await util_1.User.getPublicUser(req.user_id);
    await (0, util_1.emitEvent)({
        event: "GUILD_MEMBER_REMOVE",
        data: {
            guild_id: guild_id,
            user: user
        },
        guild_id: guild_id
    });
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=guilds.js.map