"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("#util");
const express_1 = require("express");
const file_type_1 = tslib_1.__importDefault(require("file-type"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const Storage_1 = require("../util/Storage");
// TODO: somehow handle the deletion of images posted to the /external route
const router = (0, express_1.Router)();
const DEFAULT_FETCH_OPTIONS = {
    redirect: "follow",
    follow: 1,
    headers: {
        "user-agent": "Mozilla/5.0 (compatible Fosscordbot/0.1; +https://fosscord.com)"
    },
    size: 1024 * 1024 * 8,
    compress: true,
    method: "GET"
};
router.post("/", async (req, res) => {
    if (req.headers.signature !== util_1.Config.get().security.requestSignature)
        throw new util_1.HTTPError(req.t("common:body.INVALID_REQUEST_SIGNATURE"));
    if (!req.body)
        throw new util_1.HTTPError("Invalid Body");
    const { url } = req.body;
    if (!url || typeof url !== "string")
        throw new util_1.HTTPError("Invalid url");
    const id = util_1.Snowflake.generate();
    try {
        const response = await (0, node_fetch_1.default)(url, DEFAULT_FETCH_OPTIONS);
        const buffer = await response.buffer();
        await Storage_1.storage.set(`/external/${id}`, buffer);
        res.send({ id });
    }
    catch (error) {
        throw new util_1.HTTPError("Couldn't fetch website");
    }
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const file = await Storage_1.storage.get(`/external/${id}`);
    if (!file)
        throw new util_1.HTTPError(req.t("common:notfound.FILE"));
    const result = await file_type_1.default.fromBuffer(file);
    res.set("Content-Type", result?.mime);
    return res.send(file);
});
exports.default = router;
//# sourceMappingURL=external.js.map