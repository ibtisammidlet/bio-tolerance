"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.put("/:message_id", (0, api_1.route)({ permission: "VIEW_CHANNEL" }), async (req, res) => {
    const { channel_id, message_id } = req.params;
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id } });
    // * in dm channels anyone can pin messages -> only check for guilds
    if (message.guild_id)
        req.permission.hasThrow("MANAGE_MESSAGES");
    const pinned_count = await util_1.Message.count({ where: { channel: { id: channel_id }, pinned: true } });
    const { maxPins } = util_1.Config.get().limits.channel;
    if (pinned_count >= maxPins)
        throw util_1.DiscordApiErrors.MAXIMUM_PINS.withParams(maxPins);
    await Promise.all([
        util_1.Message.update({ id: message_id }, { pinned: true }),
        (0, util_1.emitEvent)({
            event: "MESSAGE_UPDATE",
            channel_id,
            data: message
        }),
        (0, util_1.emitEvent)({
            event: "CHANNEL_PINS_UPDATE",
            channel_id,
            data: {
                channel_id,
                guild_id: message.guild_id,
                last_pin_timestamp: undefined
            }
        })
    ]);
    res.sendStatus(204);
});
router.delete("/:message_id", (0, api_1.route)({ permission: "VIEW_CHANNEL" }), async (req, res) => {
    const { channel_id, message_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (channel.guild_id)
        req.permission.hasThrow("MANAGE_MESSAGES");
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id } });
    message.pinned = false;
    await Promise.all([
        message.save(),
        (0, util_1.emitEvent)({
            event: "MESSAGE_UPDATE",
            channel_id,
            data: message
        }),
        (0, util_1.emitEvent)({
            event: "CHANNEL_PINS_UPDATE",
            channel_id,
            data: {
                channel_id,
                guild_id: channel.guild_id,
                last_pin_timestamp: undefined
            }
        })
    ]);
    res.sendStatus(204);
});
router.get("/", (0, api_1.route)({ permission: ["READ_MESSAGE_HISTORY"] }), async (req, res) => {
    const { channel_id } = req.params;
    let pins = await util_1.Message.find({ where: { channel_id, pinned: true } });
    res.send(pins);
});
exports.default = router;
//# sourceMappingURL=pins.js.map