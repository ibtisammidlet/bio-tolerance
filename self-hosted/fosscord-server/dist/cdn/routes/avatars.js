"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("#util");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const express_1 = require("express");
const file_type_1 = tslib_1.__importDefault(require("file-type"));
const multer_1 = require("../util/multer");
const Storage_1 = require("../util/Storage");
// TODO: check premium and animated pfp are allowed in the config
// TODO: generate different sizes of icon
// TODO: generate different image types of icon
// TODO: delete old icons
const ANIMATED_MIME_TYPES = ["image/apng", "image/gif", "image/gifv"];
const STATIC_MIME_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "image/svg"];
const ALLOWED_MIME_TYPES = [...ANIMATED_MIME_TYPES, ...STATIC_MIME_TYPES];
const router = (0, express_1.Router)();
router.post("/:user_id", multer_1.multer.single("file"), async (req, res) => {
    if (req.headers.signature !== util_1.Config.get().security.requestSignature)
        throw new util_1.HTTPError(req.t("common:body.INVALID_REQUEST_SIGNATURE"));
    if (!req.file)
        throw new util_1.HTTPError(req.t("common:body.MISSING_FILE"));
    const { buffer, mimetype, size, originalname, fieldname } = req.file;
    const { user_id } = req.params;
    let hash = crypto_1.default.createHash("md5").update(util_1.Snowflake.generate()).digest("hex");
    const type = await file_type_1.default.fromBuffer(buffer);
    if (!type || !ALLOWED_MIME_TYPES.includes(type.mime))
        throw new util_1.HTTPError("Invalid file type");
    if (ANIMATED_MIME_TYPES.includes(type.mime))
        hash = `a_${hash}`; // animated icons have a_ infront of the hash
    const path = `avatars/${user_id}/${hash}`;
    const endpoint = util_1.Config.get().cdn.endpointPublic || "http://localhost:3003";
    await Storage_1.storage.set(path, buffer);
    return res.json({
        id: hash,
        content_type: type.mime,
        size,
        url: `${endpoint}${req.baseUrl}/${user_id}/${hash}`
    });
});
router.get("/:user_id", async (req, res) => {
    let { user_id } = req.params;
    user_id = user_id.split(".")[0]; // remove .file extension
    const path = `avatars/${user_id}`;
    const file = await Storage_1.storage.get(path);
    if (!file)
        throw new util_1.HTTPError(req.t("common:notfound.FILE"), 404);
    const type = await file_type_1.default.fromBuffer(file);
    res.set("Content-Type", type?.mime);
    res.set("Cache-Control", "public, max-age=31536000");
    return res.send(file);
});
router.get("/:user_id/:hash", async (req, res) => {
    let { user_id, hash } = req.params;
    hash = hash.split(".")[0]; // remove .file extension
    const path = `avatars/${user_id}/${hash}`;
    const file = await Storage_1.storage.get(path);
    if (!file)
        throw new util_1.HTTPError(req.t("common:notfound.FILE"), 404);
    const type = await file_type_1.default.fromBuffer(file);
    res.set("Content-Type", type?.mime);
    res.set("Cache-Control", "public, max-age=31536000");
    return res.send(file);
});
router.delete("/:user_id/:id", async (req, res) => {
    if (req.headers.signature !== util_1.Config.get().security.requestSignature)
        throw new util_1.HTTPError(req.t("common:body.INVALID_REQUEST_SIGNATURE"));
    const { user_id, id } = req.params;
    const path = `avatars/${user_id}/${id}`;
    await Storage_1.storage.delete(path);
    return res.send({ success: true });
});
exports.default = router;
//# sourceMappingURL=avatars.js.map