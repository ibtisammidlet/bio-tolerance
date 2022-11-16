"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("#util");
const express_1 = require("express");
const file_type_1 = tslib_1.__importDefault(require("file-type"));
const image_size_1 = tslib_1.__importDefault(require("image-size"));
const multer_1 = require("../util/multer");
const Storage_1 = require("../util/Storage");
const router = (0, express_1.Router)();
const SANITIZED_CONTENT_TYPE = ["text/html", "text/mhtml", "multipart/related", "application/xhtml+xml"];
router.post("/:channel_id", multer_1.multer.single("file"), async (req, res) => {
    if (req.headers.signature !== util_1.Config.get().security.requestSignature)
        throw new util_1.HTTPError(req.t("common:body.INVALID_REQUEST_SIGNATURE"));
    if (!req.file)
        throw new util_1.HTTPError(req.t("common:body.MISSING_FILE"));
    const { buffer, mimetype, size, originalname, fieldname } = req.file;
    const { channel_id } = req.params;
    const filename = originalname.replaceAll(" ", "_").replace(/[^a-zA-Z0-9._]+/g, "");
    const id = util_1.Snowflake.generate();
    const path = `attachments/${channel_id}/${id}/${filename}`;
    const endpoint = util_1.Config.get()?.cdn.endpointPublic || "http://localhost:3003";
    await Storage_1.storage.set(path, buffer);
    let width;
    let height;
    if (mimetype.includes("image")) {
        const dimensions = (0, image_size_1.default)(buffer);
        if (dimensions) {
            width = dimensions.width;
            height = dimensions.height;
        }
    }
    const file = {
        id,
        content_type: mimetype,
        filename: filename,
        size,
        url: `${endpoint}/${path}`,
        width,
        height
    };
    return res.json(file);
});
router.get("/:channel_id/:id/:filename", async (req, res) => {
    const { channel_id, id, filename } = req.params;
    const file = await Storage_1.storage.get(`attachments/${channel_id}/${id}/${filename}`);
    if (!file)
        throw new util_1.HTTPError(req.t("common:notfound.FILE"));
    const type = await file_type_1.default.fromBuffer(file);
    let content_type = type?.mime || "application/octet-stream";
    if (SANITIZED_CONTENT_TYPE.includes(content_type)) {
        content_type = "application/octet-stream";
    }
    res.set("Content-Type", content_type);
    res.set("Cache-Control", "public, max-age=31536000");
    return res.send(file);
});
router.delete("/:channel_id/:id/:filename", async (req, res) => {
    if (req.headers.signature !== util_1.Config.get().security.requestSignature)
        throw new util_1.HTTPError(req.t("common:body.INVALID_REQUEST_SIGNATURE"));
    const { channel_id, id, filename } = req.params;
    const path = `attachments/${channel_id}/${id}/${filename}`;
    await Storage_1.storage.delete(path);
    return res.send({ success: true });
});
exports.default = router;
//# sourceMappingURL=attachments.js.map