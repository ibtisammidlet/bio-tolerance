"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    const channels = await util_1.Channel.find({ where: { guild_id } });
    res.json(channels);
});
router.post("/", (0, api_1.route)({ body: "ChannelModifySchema", permission: "MANAGE_CHANNELS" }), async (req, res) => {
    // creates a new guild channel https://discord.com/developers/docs/resources/guild#create-guild-channel
    const { guild_id } = req.params;
    const body = req.body;
    const channel = await util_1.Channel.createChannel({ ...body, guild_id }, req.user_id);
    res.status(201).json(channel);
});
router.patch("/", (0, api_1.route)({ body: "ChannelReorderSchema", permission: "MANAGE_CHANNELS" }), async (req, res) => {
    // changes guild channel position
    const { guild_id } = req.params;
    const body = req.body;
    await Promise.all([
        body.map(async (x) => {
            if (x.position == null && !x.parent_id)
                throw new util_1.HTTPError(`You need to at least specify position or parent_id`, 400);
            const opts = {};
            if (x.position != null)
                opts.position = x.position;
            if (x.parent_id) {
                opts.parent_id = x.parent_id;
                const parent_channel = await util_1.Channel.findOneOrFail({
                    where: { id: x.parent_id, guild_id },
                    select: ["permission_overwrites"]
                });
                if (x.lock_permissions) {
                    opts.permission_overwrites = parent_channel.permission_overwrites;
                }
            }
            await util_1.Channel.update({ guild_id, id: x.id }, opts);
            const channel = await util_1.Channel.findOneOrFail({ where: { guild_id, id: x.id } });
            await (0, util_1.emitEvent)({ event: "CHANNEL_UPDATE", data: channel, channel_id: x.id, guild_id });
        })
    ]);
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=channels.js.map