"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("#util");
const express_1 = tslib_1.__importDefault(require("express"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const path_1 = tslib_1.__importDefault(require("path"));
const picocolors_1 = require("picocolors");
const proxy_agent_1 = tslib_1.__importDefault(require("proxy-agent"));
const AssetCacheItem_1 = require("../util/entities/AssetCacheItem");
const AssetsPath = path_1.default.join(__dirname, "..", "..", "..", "assets");
function TestClient(app) {
    const agent = new proxy_agent_1.default();
    //build client page
    let html = fs_1.default.readFileSync(path_1.default.join(AssetsPath, "index.html"), { encoding: "utf8" });
    html = applyEnv(html);
    html = applyInlinePlugins(html);
    html = applyPlugins(html);
    html = applyPreloadPlugins(html);
    //load asset cache
    let newAssetCache = new Map();
    let assetCacheDir = path_1.default.join(AssetsPath, "cache");
    if (process.env.ASSET_CACHE_DIR)
        assetCacheDir = process.env.ASSET_CACHE_DIR;
    console.log(`[TestClient] ${(0, picocolors_1.green)(`Using asset cache path: ${assetCacheDir}`)}`);
    if (!fs_1.default.existsSync(assetCacheDir)) {
        fs_1.default.mkdirSync(assetCacheDir);
    }
    if (fs_1.default.existsSync(path_1.default.join(assetCacheDir, "index.json"))) {
        let rawdata = fs_1.default.readFileSync(path_1.default.join(assetCacheDir, "index.json"));
        newAssetCache = new Map(Object.entries(JSON.parse(rawdata.toString())));
    }
    app.use("/assets", express_1.default.static(path_1.default.join(AssetsPath)));
    app.get("/assets/:file", async (req, res) => {
        delete req.headers.host;
        let response;
        let buffer;
        let assetCacheItem = new AssetCacheItem_1.AssetCacheItem(req.params.file);
        if (newAssetCache.has(req.params.file)) {
            assetCacheItem = newAssetCache.get(req.params.file);
            assetCacheItem.Headers.forEach((value, name) => {
                res.set(name, value);
            });
        }
        else {
            if (req.params.file.endsWith(".map")) {
                return res.status(404).send("Not found");
            }
            console.log(`[TestClient] Downloading file not yet cached! Asset file: ${req.params.file}`);
            response = await (0, node_fetch_1.default)(`https://discord.com/assets/${req.params.file}`, {
                agent,
                // @ts-ignore
                headers: {
                    ...req.headers
                }
            });
            //set cache info
            assetCacheItem.Headers = Object.fromEntries(stripHeaders(response.headers));
            assetCacheItem.FilePath = path_1.default.join(assetCacheDir, req.params.file);
            assetCacheItem.Key = req.params.file;
            //add to cache and save
            newAssetCache.set(req.params.file, assetCacheItem);
            fs_1.default.writeFileSync(path_1.default.join(assetCacheDir, "index.json"), JSON.stringify(Object.fromEntries(newAssetCache), null, 4));
            //download file
            fs_1.default.writeFileSync(assetCacheItem.FilePath, await response.buffer());
        }
        assetCacheItem.Headers.forEach((value, name) => {
            res.set(name, value);
        });
        return res.send(fs_1.default.readFileSync(assetCacheItem.FilePath));
    });
    app.get("/developers*", (_req, res) => {
        const { useTestClient } = util_1.Config.get().client;
        res.set("Cache-Control", "public, max-age=" + 60 * 60 * 24);
        res.set("content-type", "text/html");
        if (!useTestClient)
            return res.send("Test client is disabled on this instance. Use a stand-alone client to connect this instance.");
        res.send(fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "..", "..", "assets", "developers.html"), { encoding: "utf8" }));
    });
    app.get("*", (req, res) => {
        const { useTestClient } = util_1.Config.get().client;
        res.set("Cache-Control", "public, max-age=" + 60 * 60 * 24);
        res.set("content-type", "text/html");
        if (req.url.startsWith("/api") || req.url.startsWith("/__development"))
            return;
        if (!useTestClient)
            return res.send("Test client is disabled on this instance. Use a stand-alone client to connect this instance.");
        if (req.url.startsWith("/invite"))
            return res.send(html.replace("9b2b7f0632acd0c5e781", "9f24f709a3de09b67c49"));
        res.send(html);
    });
}
exports.default = TestClient;
function applyEnv(html) {
    const CDN_ENDPOINT = (util_1.Config.get()?.cdn.endpointPublic || process.env.CDN || "").replace(/(https?)?(:\/\/?)/g, "");
    const GATEWAY_ENDPOINT = util_1.Config.get()?.gateway.endpointPublic || process.env.GATEWAY || "";
    if (CDN_ENDPOINT) {
        html = html.replace(/CDN_HOST: .+/, `CDN_HOST: \`${CDN_ENDPOINT}\`,`);
    }
    if (GATEWAY_ENDPOINT) {
        html = html.replace(/GATEWAY_ENDPOINT: .+/, `GATEWAY_ENDPOINT: \`${GATEWAY_ENDPOINT}\`,`);
    }
    return html;
}
function applyPlugins(html) {
    // plugins
    let files = fs_1.default.readdirSync(path_1.default.join(AssetsPath, "plugins"));
    let plugins = "";
    files.forEach((x) => {
        if (x.endsWith(".js"))
            plugins += `<script src='/assets/plugins/${x}'></script>\n`;
    });
    return html.replaceAll("<!-- plugin marker -->", plugins);
}
function applyInlinePlugins(html) {
    // inline plugins
    let files = fs_1.default.readdirSync(path_1.default.join(AssetsPath, "inline-plugins"));
    let plugins = "";
    files.forEach((x) => {
        if (x.endsWith(".js"))
            plugins += `<script src='/assets/inline-plugins/${x}'></script>\n\n`;
    });
    return html.replaceAll("<!-- inline plugin marker -->", plugins);
}
function applyPreloadPlugins(html) {
    //preload plugins
    let files = fs_1.default.readdirSync(path_1.default.join(AssetsPath, "preload-plugins"));
    let plugins = "";
    files.forEach((x) => {
        if (x.endsWith(".js"))
            plugins += `<script>${fs_1.default.readFileSync(path_1.default.join(AssetsPath, "preload-plugins", x))}</script>\n`;
    });
    return html.replaceAll("<!-- preload plugin marker -->", plugins);
}
function stripHeaders(headers) {
    [
        "content-length",
        "content-security-policy",
        "strict-transport-security",
        "set-cookie",
        "transfer-encoding",
        "expect-ct",
        "access-control-allow-origin",
        "content-encoding"
    ].forEach((headerName) => {
        headers.delete(headerName);
    });
    return headers;
}
//# sourceMappingURL=TestClient.js.map