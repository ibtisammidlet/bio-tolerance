"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/:code", (0, api_1.route)({}), async (req, res) => {
    const { code } = req.params;
    const invite = await util_1.Invite.findOneOrFail({ where: { code }, relations: util_1.PublicInviteRelation });
    res.status(200).send(invite);
});
router.post("/:code", (0, api_1.route)({ right: "USE_MASS_INVITES" }), async (req, res) => {
    const { code } = req.params;
    const { guild_id } = await util_1.Invite.findOneOrFail({ where: { code } });
    const { features } = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    const { public_flags } = await util_1.User.findOneOrFail({ where: { id: req.user_id } });
    if (features.includes("INTERNAL_EMPLOYEE_ONLY") && (public_flags & 1) !== 1)
        throw new util_1.HTTPError("Only intended for the staff of this server.", 401);
    if (features.includes("INVITES_CLOSED"))
        throw new util_1.HTTPError("Sorry, this guild has joins closed.", 403);
    const invite = await util_1.Invite.joinGuild(req.user_id, code);
    res.json(invite);
});
// * cant use permission of route() function because path doesn't have guild_id/channel_id
router.delete("/:code", (0, api_1.route)({}), async (req, res) => {
    const { code } = req.params;
    const invite = await util_1.Invite.findOneOrFail({ where: { code } });
    const { guild_id, channel_id } = invite;
    const permission = await (0, util_1.getPermission)(req.user_id, guild_id, channel_id);
    if (!permission.has("MANAGE_GUILD") && !permission.has("MANAGE_CHANNELS"))
        throw new util_1.HTTPError("You missing the MANAGE_GUILD or MANAGE_CHANNELS permission", 401);
    await Promise.all([
        util_1.Invite.delete({ code }),
        (0, util_1.emitEvent)({
            event: "INVITE_DELETE",
            guild_id: guild_id,
            data: {
                channel_id: channel_id,
                guild_id: guild_id,
                code: code
            }
        })
    ]);
    res.json({ invite: invite });
});
exports.default = router;
//# sourceMappingURL=index.js.map