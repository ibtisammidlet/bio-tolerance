"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
// TODO: delete channel
// TODO: Get channel
router.get("/", (0, api_1.route)({ permission: "VIEW_CHANNEL" }), async (req, res) => {
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    return res.send(channel);
});
router.delete("/", (0, api_1.route)({ permission: "MANAGE_CHANNELS" }), async (req, res) => {
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id }, relations: ["recipients"] });
    if (channel.type === util_1.ChannelType.DM) {
        const recipient = await util_1.Recipient.findOneOrFail({ where: { channel_id, user_id: req.user_id } });
        recipient.closed = true;
        await Promise.all([
            recipient.save(),
            (0, util_1.emitEvent)({ event: "CHANNEL_DELETE", data: channel, user_id: req.user_id })
        ]);
    }
    else if (channel.type === util_1.ChannelType.GROUP_DM) {
        await util_1.Channel.removeRecipientFromChannel(channel, req.user_id);
    }
    else {
        await Promise.all([
            util_1.Channel.delete({ id: channel_id }),
            (0, util_1.emitEvent)({ event: "CHANNEL_DELETE", data: channel, channel_id })
        ]);
    }
    res.send(channel);
});
router.patch("/", (0, api_1.route)({ body: "ChannelModifySchema", permission: "MANAGE_CHANNELS" }), async (req, res) => {
    let payload = req.body;
    const { channel_id } = req.params;
    if (payload.icon)
        payload.icon = await (0, util_1.handleFile)(`/channel-icons/${channel_id}`, payload.icon);
    let channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    channel = util_1.OrmUtils.mergeDeep(channel, payload);
    await Promise.all([
        channel.save(),
        (0, util_1.emitEvent)({
            event: "CHANNEL_UPDATE",
            data: channel,
            channel_id
        })
    ]);
    res.send(channel);
});
exports.default = router;
//# sourceMappingURL=index.js.map