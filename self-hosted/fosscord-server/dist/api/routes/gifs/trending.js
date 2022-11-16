"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGifApiKey = exports.parseGifResult = void 0;
const tslib_1 = require("tslib");
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const proxy_agent_1 = tslib_1.__importDefault(require("proxy-agent"));
const router = (0, express_1.Router)();
function parseGifResult(result) {
    return {
        id: result.id,
        title: result.title,
        url: result.itemurl,
        src: result.media[0].mp4.url,
        gif_src: result.media[0].gif.url,
        width: result.media[0].mp4.dims[0],
        height: result.media[0].mp4.dims[1],
        preview: result.media[0].mp4.preview
    };
}
exports.parseGifResult = parseGifResult;
function getGifApiKey() {
    const { enabled, provider, apiKey } = util_1.Config.get().gif;
    if (!enabled)
        throw new util_1.HTTPError(`Gifs are disabled`);
    if (provider !== "tenor" || !apiKey)
        throw new util_1.HTTPError(`${provider} gif provider not supported`);
    return apiKey;
}
exports.getGifApiKey = getGifApiKey;
router.get("/", (0, api_1.route)({}), async (req, res) => {
    // TODO: Custom providers
    // TODO: return gifs as mp4
    const { media_format, locale } = req.query;
    const apiKey = getGifApiKey();
    const agent = new proxy_agent_1.default();
    const [responseSource, trendGifSource] = await Promise.all([
        (0, node_fetch_1.default)(`https://g.tenor.com/v1/categories?locale=${locale}&key=${apiKey}`, {
            agent,
            method: "get",
            headers: { "Content-Type": "application/json" }
        }),
        (0, node_fetch_1.default)(`https://g.tenor.com/v1/trending?locale=${locale}&key=${apiKey}`, {
            agent,
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
    ]);
    const { tags } = (await responseSource.json());
    const { results } = (await trendGifSource.json());
    res.json({
        categories: tags.map((x) => ({ name: x.searchterm, src: x.image })),
        gifs: [parseGifResult(results[0])]
    }).status(200);
});
exports.default = router;
//# sourceMappingURL=trending.js.map