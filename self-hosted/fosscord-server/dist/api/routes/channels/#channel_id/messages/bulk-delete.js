"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const router = (0, express_1.Router)();
exports.default = router;
// should users be able to bulk delete messages or only bots? ANSWER: all users
// should this request fail, if you provide messages older than 14 days/invalid ids? ANSWER: NO
// https://discord.com/developers/docs/resources/channel#bulk-delete-messages
router.post("/", (0, api_1.route)({ body: "BulkDeleteSchema" }), async (req, res) => {
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel.guild_id)
        throw new util_1.HTTPError("Can't bulk delete dm channel messages", 400);
    const rights = await (0, util_1.getRights)(req.user_id);
    rights.hasThrow("SELF_DELETE_MESSAGES");
    let superuser = rights.has("MANAGE_MESSAGES");
    const permission = await (0, util_1.getPermission)(req.user_id, channel?.guild_id, channel_id);
    const { maxBulkDelete } = util_1.Config.get().limits.message;
    const { messages } = req.body;
    if (messages.length === 0)
        throw new util_1.HTTPError("You must specify messages to bulk delete");
    if (!superuser) {
        permission.hasThrow("MANAGE_MESSAGES");
        if (messages.length > maxBulkDelete)
            throw new util_1.HTTPError(`You cannot delete more than ${maxBulkDelete} messages`);
    }
    await util_1.Message.delete({ id: (0, typeorm_1.In)(messages) });
    await (0, util_1.emitEvent)({
        event: "MESSAGE_DELETE_BULK",
        channel_id,
        data: { ids: messages, channel_id, guild_id: channel.guild_id }
    });
    res.sendStatus(204);
});
//# sourceMappingURL=bulk-delete.js.map