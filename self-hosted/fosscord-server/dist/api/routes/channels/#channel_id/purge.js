"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const messages_1 = require("./messages");
const router = (0, express_1.Router)();
exports.default = router;
/**
TODO: apply the delete bit by bit to prevent client and database stress
**/
router.post("/", (0, api_1.route)({
/*body: "PurgeSchema",*/
}), async (req, res) => {
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel.guild_id)
        throw new util_1.HTTPError("Can't purge dm channels", 400);
    (0, messages_1.isTextChannel)(channel.type);
    const rights = await (0, util_1.getRights)(req.user_id);
    if (!rights.has("MANAGE_MESSAGES")) {
        const permissions = await (0, util_1.getPermission)(req.user_id, channel.guild_id, channel_id);
        permissions.hasThrow("MANAGE_MESSAGES");
        permissions.hasThrow("MANAGE_CHANNELS");
    }
    const { before, after } = req.body;
    // TODO: send the deletion event bite-by-bite to prevent client stress
    let query = {
        order: { id: "ASC" },
        // take: limit,
        where: {
            channel_id,
            id: (0, typeorm_1.Between)(after, before),
            author_id: rights.has("SELF_DELETE_MESSAGES") ? undefined : (0, typeorm_1.Not)(req.user_id)
            // if you lack the right of self-deletion, you can't delete your own messages, even in purges
        },
        relations: ["author", "webhook", "application", "mentions", "mention_roles", "mention_channels", "sticker_items", "attachments"]
    };
    const messages = await util_1.Message.find(query);
    const endpoint = util_1.Config.get().cdn.endpointPublic;
    if (messages.length == 0) {
        res.sendStatus(304);
        return;
    }
    await util_1.Message.delete({ id: (0, typeorm_1.In)(messages) });
    await (0, util_1.emitEvent)({
        event: "MESSAGE_DELETE_BULK",
        channel_id,
        data: { ids: messages.map((x) => x.id), channel_id, guild_id: channel.guild_id }
    });
    res.sendStatus(204);
});
//# sourceMappingURL=purge.js.map