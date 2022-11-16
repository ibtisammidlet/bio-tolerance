"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    const emojis = await util_1.Emoji.find({ where: { guild_id: guild_id }, relations: ["user"] });
    return res.json(emojis);
});
router.get("/:emoji_id", (0, api_1.route)({}), async (req, res) => {
    const { guild_id, emoji_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    const emoji = await util_1.Emoji.findOneOrFail({ where: { guild_id: guild_id, id: emoji_id }, relations: ["user"] });
    return res.json(emoji);
});
router.post("/", (0, api_1.route)({ body: "EmojiCreateSchema", permission: "MANAGE_EMOJIS_AND_STICKERS" }), async (req, res) => {
    const { guild_id } = req.params;
    const body = req.body;
    const id = util_1.Snowflake.generate();
    const emoji_count = await util_1.Emoji.count({ where: { guild_id } });
    const { maxEmojis } = util_1.Config.get().limits.guild;
    if (emoji_count >= maxEmojis)
        throw util_1.DiscordApiErrors.MAXIMUM_NUMBER_OF_EMOJIS_REACHED.withParams(maxEmojis);
    if (body.require_colons == null)
        body.require_colons = true;
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id } });
    body.image = (await (0, util_1.handleFile)(`/emojis/${id}`, body.image));
    const emoji = await util_1.OrmUtils.mergeDeep(new util_1.Emoji(), {
        id: id,
        guild_id: guild_id,
        ...body,
        user: user,
        managed: false,
        animated: false,
        available: true,
        roles: []
    }).save();
    await (0, util_1.emitEvent)({
        event: "GUILD_EMOJIS_UPDATE",
        guild_id: guild_id,
        data: {
            guild_id: guild_id,
            emojis: await util_1.Emoji.find({ where: { guild_id } })
        }
    });
    return res.status(201).json(emoji);
});
router.patch("/:emoji_id", (0, api_1.route)({ body: "EmojiModifySchema", permission: "MANAGE_EMOJIS_AND_STICKERS" }), async (req, res) => {
    const { emoji_id, guild_id } = req.params;
    const body = req.body;
    const emoji = await util_1.OrmUtils.mergeDeep(new util_1.Emoji(), { ...body, id: emoji_id, guild_id: guild_id }).save();
    await (0, util_1.emitEvent)({
        event: "GUILD_EMOJIS_UPDATE",
        guild_id: guild_id,
        data: {
            guild_id: guild_id,
            emojis: await util_1.Emoji.find({ where: { guild_id } })
        }
    });
    return res.json(emoji);
});
router.delete("/:emoji_id", (0, api_1.route)({ permission: "MANAGE_EMOJIS_AND_STICKERS" }), async (req, res) => {
    const { emoji_id, guild_id } = req.params;
    await util_1.Emoji.delete({
        id: emoji_id,
        guild_id: guild_id
    });
    await (0, util_1.emitEvent)({
        event: "GUILD_EMOJIS_UPDATE",
        guild_id: guild_id,
        data: {
            guild_id: guild_id,
            emojis: await util_1.Emoji.find({ where: { guild_id } })
        }
    });
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=emojis.js.map