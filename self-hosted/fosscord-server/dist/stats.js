"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStats = void 0;
const tslib_1 = require("tslib");
const os_1 = tslib_1.__importDefault(require("os"));
const picocolors_1 = require("picocolors");
function initStats() {
    console.log(`[Path] running in ${__dirname}`);
    try {
        console.log(`[CPU] ${os_1.default.cpus()[0].model} Cores x${os_1.default.cpus().length}`);
    }
    catch {
        console.log("[CPU] Failed to get cpu model!");
    }
    console.log(`[System] ${os_1.default.platform()} ${os_1.default.arch()}`);
    console.log(`[Process] running with PID: ${process.pid}`);
    if (process.getuid && process.getuid() === 0) {
        console.warn((0, picocolors_1.red)(`[Process] Warning fosscord is running as root, this highly discouraged and might expose your system vulnerable to attackers. Please run fosscord as a user without root privileges.`));
    }
}
exports.initStats = initStats;
//# sourceMappingURL=stats.js.map