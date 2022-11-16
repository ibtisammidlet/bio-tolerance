"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStickerFormat = void 0;
const tslib_1 = require("tslib");
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const multer_1 = tslib_1.__importDefault(require("multer"));
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    res.json(await util_1.Sticker.find({ where: { guild_id } }));
});
const bodyParser = (0, multer_1.default)({
    limits: {
        fileSize: 1024 * 1024 * 100,
        fields: 10,
        files: 1
    },
    storage: multer_1.default.memoryStorage()
}).single("file");
router.post("/", bodyParser, (0, api_1.route)({ permission: "MANAGE_EMOJIS_AND_STICKERS", body: "ModifyGuildStickerSchema" }), async (req, res) => {
    if (!req.file)
        throw new util_1.HTTPError(req.t("common:body.MISSING_FILE"));
    const { guild_id } = req.params;
    const body = req.body;
    const id = util_1.Snowflake.generate();
    const [sticker] = await Promise.all([
        util_1.OrmUtils.mergeDeep(new util_1.Sticker(), {
            ...body,
            guild_id,
            id,
            type: util_1.StickerType.GUILD,
            format_type: getStickerFormat(req.file.mimetype),
            available: true
        }).save(),
        (0, util_1.uploadFile)(`/stickers/${id}`, req.file)
    ]);
    await sendStickerUpdateEvent(guild_id);
    res.json(sticker);
});
function getStickerFormat(mime_type) {
    switch (mime_type) {
        case "image/apng":
            return util_1.StickerFormatType.APNG;
        case "application/json":
            return util_1.StickerFormatType.LOTTIE;
        case "image/png":
            return util_1.StickerFormatType.PNG;
        case "image/gif":
            return util_1.StickerFormatType.GIF;
        default:
            throw new util_1.HTTPError("invalid sticker format: must be png, apng or lottie");
    }
}
exports.getStickerFormat = getStickerFormat;
router.get("/:sticker_id", (0, api_1.route)({}), async (req, res) => {
    const { guild_id, sticker_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    res.json(await util_1.Sticker.findOneOrFail({ where: { guild_id, id: sticker_id } }));
});
router.patch("/:sticker_id", (0, api_1.route)({ body: "ModifyGuildStickerSchema", permission: "MANAGE_EMOJIS_AND_STICKERS" }), async (req, res) => {
    const { guild_id, sticker_id } = req.params;
    const body = req.body;
    const sticker = await util_1.OrmUtils.mergeDeep(new util_1.Sticker(), { ...body, guild_id, id: sticker_id }).save();
    await sendStickerUpdateEvent(guild_id);
    return res.json(sticker);
});
async function sendStickerUpdateEvent(guild_id) {
    return (0, util_1.emitEvent)({
        event: "GUILD_STICKERS_UPDATE",
        guild_id: guild_id,
        data: {
            guild_id: guild_id,
            stickers: await util_1.Sticker.find({ where: { guild_id } })
        }
    });
}
router.delete("/:sticker_id", (0, api_1.route)({ permission: "MANAGE_EMOJIS_AND_STICKERS" }), async (req, res) => {
    const { guild_id, sticker_id } = req.params;
    await util_1.Sticker.delete({ guild_id, id: sticker_id });
    await sendStickerUpdateEvent(guild_id);
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=stickers.js.map