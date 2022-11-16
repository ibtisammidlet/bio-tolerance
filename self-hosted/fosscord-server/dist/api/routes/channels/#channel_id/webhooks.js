"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const index_1 = require("./messages/index");
const router = (0, express_1.Router)();
//TODO: implement webhooks
router.get("/", (0, api_1.route)({}), async (req, res) => {
    res.json([]);
});
// TODO: use Image Data Type for avatar instead of String
router.post("/", (0, api_1.route)({ body: "WebhookCreateSchema", permission: "MANAGE_WEBHOOKS" }), async (req, res) => {
    const channel_id = req.params.channel_id;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    (0, index_1.isTextChannel)(channel.type);
    if (!channel.guild_id)
        throw new util_1.HTTPError("Not a guild channel", 400);
    const webhook_count = await util_1.Webhook.count({ where: { channel_id } });
    const { maxWebhooks } = util_1.Config.get().limits.channel;
    if (webhook_count > maxWebhooks)
        throw util_1.DiscordApiErrors.MAXIMUM_WEBHOOKS.withParams(maxWebhooks);
    let { avatar, name } = req.body;
    name = (0, util_1.trimSpecial)(name);
    if (name.toLowerCase() === "clyde")
        throw new util_1.HTTPError("Invalid name", 400);
    // TODO: save webhook in database and send response
    res.json(new util_1.Webhook());
});
exports.default = router;
//# sourceMappingURL=webhooks.js.map