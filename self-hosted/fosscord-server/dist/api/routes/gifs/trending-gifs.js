"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const api_1 = require("#api");
const express_1 = require("express");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const proxy_agent_1 = tslib_1.__importDefault(require("proxy-agent"));
const trending_1 = require("./trending");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    // TODO: Custom providers
    const { media_format, locale } = req.query;
    const apiKey = (0, trending_1.getGifApiKey)();
    const agent = new proxy_agent_1.default();
    const response = await (0, node_fetch_1.default)(`https://g.tenor.com/v1/trending?media_format=${media_format}&locale=${locale}&key=${apiKey}`, {
        agent,
        method: "get",
        headers: { "Content-Type": "application/json" }
    });
    const { results } = (await response.json());
    res.json(results.map(trending_1.parseGifResult)).status(200);
});
exports.default = router;
//# sourceMappingURL=trending-gifs.js.map