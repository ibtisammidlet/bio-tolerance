"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const router = (0, express_1.Router)();
// TODO: check if emoji is really an unicode emoji or a prperly encoded external emoji
function getEmoji(emoji) {
    emoji = decodeURIComponent(emoji);
    const parts = emoji.includes(":") && emoji.split(":");
    if (parts)
        return {
            name: parts[0],
            id: parts[1]
        };
    return {
        id: undefined,
        name: emoji
    };
}
router.delete("/", (0, api_1.route)({ permission: "MANAGE_MESSAGES" }), async (req, res) => {
    const { message_id, channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    await util_1.Message.update({ id: message_id, channel_id }, { reactions: [] });
    await (0, util_1.emitEvent)({
        event: "MESSAGE_REACTION_REMOVE_ALL",
        channel_id,
        data: {
            channel_id,
            message_id,
            guild_id: channel.guild_id
        }
    });
    res.sendStatus(204);
});
router.delete("/:emoji", (0, api_1.route)({ permission: "MANAGE_MESSAGES" }), async (req, res) => {
    const { message_id, channel_id } = req.params;
    const emoji = getEmoji(req.params.emoji);
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id, channel_id } });
    const already_added = message.reactions.find((x) => (x.emoji.id === emoji.id && emoji.id) || x.emoji.name === emoji.name);
    if (!already_added)
        throw new util_1.HTTPError(req.t("common:notfound.REACTION"), 404);
    message.reactions.remove(already_added);
    await Promise.all([
        message.save(),
        (0, util_1.emitEvent)({
            event: "MESSAGE_REACTION_REMOVE_EMOJI",
            channel_id,
            data: {
                channel_id,
                message_id,
                guild_id: message.guild_id,
                emoji
            }
        })
    ]);
    res.sendStatus(204);
});
router.get("/:emoji", (0, api_1.route)({ permission: "VIEW_CHANNEL" }), async (req, res) => {
    const { message_id, channel_id } = req.params;
    const emoji = getEmoji(req.params.emoji);
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id, channel_id } });
    const reaction = message.reactions.find((x) => (x.emoji.id === emoji.id && emoji.id) || x.emoji.name === emoji.name);
    if (!reaction)
        throw new util_1.HTTPError(req.t("common:notfound.REACTION"), 404);
    const users = await util_1.User.find({
        where: {
            id: (0, typeorm_1.In)(reaction.user_ids)
        },
        select: util_1.PublicUserProjection
    });
    res.json(users);
});
router.put("/:emoji/:user_id", (0, api_1.route)({ permission: "READ_MESSAGE_HISTORY", right: "SELF_ADD_REACTIONS" }), async (req, res) => {
    const { message_id, channel_id, user_id } = req.params;
    if (user_id !== "@me")
        throw new util_1.HTTPError("Invalid user");
    const emoji = getEmoji(req.params.emoji);
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id, channel_id } });
    const already_added = message.reactions.find((x) => (x.emoji.id === emoji.id && emoji.id) || x.emoji.name === emoji.name);
    if (!already_added)
        req.permission.hasThrow("ADD_REACTIONS");
    if (emoji.id) {
        const external_emoji = await util_1.Emoji.findOneOrFail({ where: { id: emoji.id } });
        if (!already_added)
            req.permission.hasThrow("USE_EXTERNAL_EMOJIS");
        emoji.animated = external_emoji.animated;
        emoji.name = external_emoji.name;
    }
    if (already_added) {
        if (already_added.user_ids.includes(req.user_id))
            return res.sendStatus(204); // Do not throw an error ¯\_(ツ)_/¯ as discord also doesn't throw any error
        already_added.count++;
    }
    else
        message.reactions.push({ count: 1, emoji, user_ids: [req.user_id] });
    await message.save();
    const member = channel.guild_id && (await util_1.Member.findOneOrFail({ where: { id: req.user_id } }));
    await (0, util_1.emitEvent)({
        event: "MESSAGE_REACTION_ADD",
        channel_id,
        data: {
            user_id: req.user_id,
            channel_id,
            message_id,
            guild_id: channel.guild_id,
            emoji,
            member
        }
    });
    res.sendStatus(204);
});
router.delete("/:emoji/:user_id", (0, api_1.route)({}), async (req, res) => {
    let { message_id, channel_id, user_id } = req.params;
    const emoji = getEmoji(req.params.emoji);
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    const message = await util_1.Message.findOneOrFail({ where: { id: message_id, channel_id } });
    if (user_id === "@me")
        user_id = req.user_id;
    else {
        const permissions = await (0, util_1.getPermission)(req.user_id, undefined, channel_id);
        permissions.hasThrow("MANAGE_MESSAGES");
    }
    const already_added = message.reactions.find((x) => (x.emoji.id === emoji.id && emoji.id) || x.emoji.name === emoji.name);
    if (!already_added || !already_added.user_ids.includes(user_id))
        throw new util_1.HTTPError(req.t("common:notfound.REACTION"), 404);
    already_added.count--;
    if (already_added.count <= 0)
        message.reactions.remove(already_added);
    await message.save();
    await (0, util_1.emitEvent)({
        event: "MESSAGE_REACTION_REMOVE",
        channel_id,
        data: {
            user_id: req.user_id,
            channel_id,
            message_id,
            guild_id: channel.guild_id,
            emoji
        }
    });
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=reactions.js.map