"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableAutoUpdate = void 0;
const tslib_1 = require("tslib");
const promises_1 = tslib_1.__importDefault(require("fs/promises"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const path_1 = tslib_1.__importDefault(require("path"));
const proxy_agent_1 = tslib_1.__importDefault(require("proxy-agent"));
const readline_1 = tslib_1.__importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function enableAutoUpdate(opts) {
    if (!opts.checkInterval)
        return;
    let interval = 1000 * 60 * 60 * 24;
    if (typeof opts.checkInterval === "number")
        opts.checkInterval = 1000 * interval;
    const i = setInterval(async () => {
        const currentVersion = await getCurrentVersion(opts.path);
        const latestVersion = await getLatestVersion(opts.packageJsonLink);
        if (currentVersion !== latestVersion) {
            clearInterval(i);
            console.log(`[Auto Update] Current version (${currentVersion}) is out of date, updating ...`);
            await download(opts.downloadUrl, opts.path);
        }
    }, interval);
    setImmediate(async () => {
        const currentVersion = await getCurrentVersion(opts.path);
        const latestVersion = await getLatestVersion(opts.packageJsonLink);
        if (currentVersion !== latestVersion) {
            rl.question(`[Auto Update] Current version (${currentVersion}) is out of date, would you like to update? (yes/no)`, (answer) => {
                if (answer.toBoolean()) {
                    console.log(`[Auto update] updating ...`);
                    download(opts.downloadUrl, opts.path);
                }
                else {
                    console.log(`[Auto update] aborted`);
                }
            });
        }
    });
}
exports.enableAutoUpdate = enableAutoUpdate;
async function download(url, dir) {
    try {
        // TODO: use file stream instead of buffer (to prevent crash because of high memory usage for big files)
        // TODO check file hash
        const agent = new proxy_agent_1.default();
        const response = await (0, node_fetch_1.default)(url, { agent });
        const buffer = await response.buffer();
        const tempDir = await promises_1.default.mkdtemp("fosscord");
        promises_1.default.writeFile(path_1.default.join(tempDir, "Fosscord.zip"), buffer);
    }
    catch (error) {
        console.error(`[Auto Update] download failed`, error);
    }
}
async function getCurrentVersion(dir) {
    try {
        const content = await promises_1.default.readFile(path_1.default.join(dir, "package.json"), { encoding: "utf8" });
        return JSON.parse(content).version;
    }
    catch (error) {
        throw new Error("[Auto update] couldn't get current version in " + dir);
    }
}
async function getLatestVersion(url) {
    try {
        const agent = new proxy_agent_1.default();
        const response = await (0, node_fetch_1.default)(url, { agent });
        const content = await response.json();
        return content.version;
    }
    catch (error) {
        throw new Error("[Auto update] check failed for " + url);
    }
}
//# sourceMappingURL=AutoUpdate.js.map