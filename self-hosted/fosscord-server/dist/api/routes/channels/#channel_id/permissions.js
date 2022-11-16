"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.put("/:overwrite_id", (0, api_1.route)({ body: "ChannelPermissionOverwriteSchema", permission: "MANAGE_ROLES" }), async (req, res) => {
    const { channel_id, overwrite_id } = req.params;
    const body = req.body;
    let channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel.guild_id)
        throw new util_1.HTTPError(req.t("common:notfound.CHANNEL"), 404);
    if (body.type === 0) {
        if (!(await util_1.Role.count({ where: { id: overwrite_id } })))
            throw new util_1.HTTPError(req.t("common:notfound.ROLE"), 404);
    }
    else if (body.type === 1) {
        if (!(await util_1.Member.count({ where: { id: overwrite_id } })))
            throw new util_1.HTTPError(req.t("common:notfound.USER"), 404);
    }
    else
        throw new util_1.HTTPError("type not supported", 501);
    // @ts-ignore
    let overwrite = channel.permission_overwrites.find((x) => x.id === overwrite_id);
    if (!overwrite) {
        // @ts-ignore
        overwrite = {
            id: overwrite_id,
            type: body.type
        };
        channel.permission_overwrites.push(overwrite);
    }
    overwrite.allow = String(req.permission.bitfield & (BigInt(body.allow) || BigInt("0")));
    overwrite.deny = String(req.permission.bitfield & (BigInt(body.deny) || BigInt("0")));
    await Promise.all([
        channel.save(),
        (0, util_1.emitEvent)({
            event: "CHANNEL_UPDATE",
            channel_id,
            data: channel
        })
    ]);
    return res.sendStatus(204);
});
// TODO: check permission hierarchy
router.delete("/:overwrite_id", (0, api_1.route)({ permission: "MANAGE_ROLES" }), async (req, res) => {
    const { channel_id, overwrite_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel.guild_id)
        throw new util_1.HTTPError(req.t("common:notfound.CHANNEL"), 404);
    channel.permission_overwrites = channel.permission_overwrites.filter((x) => x.id === overwrite_id);
    await Promise.all([
        channel.save(),
        (0, util_1.emitEvent)({
            event: "CHANNEL_UPDATE",
            channel_id,
            data: channel
        })
    ]);
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=permissions.js.map