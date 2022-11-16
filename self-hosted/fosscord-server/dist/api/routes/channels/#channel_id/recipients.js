"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.put("/:user_id", (0, api_1.route)({}), async (req, res) => {
    const { channel_id, user_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id }, relations: ["recipients"] });
    if (channel.type !== util_1.ChannelType.GROUP_DM) {
        const recipients = [...channel.recipients.map((r) => r.user_id), user_id].unique();
        const new_channel = await util_1.Channel.createDMChannel(recipients, req.user_id);
        return res.status(201).json(new_channel);
    }
    else {
        if (channel.recipients.map((r) => r.user_id).includes(user_id)) {
            throw util_1.DiscordApiErrors.INVALID_RECIPIENT; //TODO is this the right error?
        }
        channel.recipients.push(util_1.OrmUtils.mergeDeep(new util_1.Recipient(), { channel_id, user_id: user_id }));
        await channel.save();
        await (0, util_1.emitEvent)({
            event: "CHANNEL_CREATE",
            data: await util_1.DmChannelDTO.from(channel, [user_id]),
            user_id: user_id
        });
        await (0, util_1.emitEvent)({
            event: "CHANNEL_RECIPIENT_ADD",
            data: {
                channel_id: channel_id,
                user: await util_1.User.findOneOrFail({ where: { id: user_id }, select: util_1.PublicUserProjection })
            },
            channel_id: channel_id
        });
        return res.sendStatus(204);
    }
});
router.delete("/:user_id", (0, api_1.route)({}), async (req, res) => {
    const { channel_id, user_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id }, relations: ["recipients"] });
    if (!(channel.type === util_1.ChannelType.GROUP_DM && (channel.owner_id === req.user_id || user_id === req.user_id)))
        throw util_1.DiscordApiErrors.MISSING_PERMISSIONS;
    if (!channel.recipients.map((r) => r.user_id).includes(user_id)) {
        throw util_1.DiscordApiErrors.INVALID_RECIPIENT; //TODO is this the right error?
    }
    await util_1.Channel.removeRecipientFromChannel(channel, user_id);
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=recipients.js.map