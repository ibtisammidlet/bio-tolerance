"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const sticker_packs = await util_1.StickerPack.find({ relations: ["stickers"] });
    res.json({ sticker_packs });
});
exports.default = router;
//# sourceMappingURL=index.js.map