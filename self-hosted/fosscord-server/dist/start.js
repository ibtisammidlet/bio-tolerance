"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// process.env.MONGOMS_DEBUG = "true";
const child_process_1 = require("child_process");
const cluster_1 = tslib_1.__importDefault(require("cluster"));
const dotenv_1 = require("dotenv");
const os_1 = tslib_1.__importDefault(require("os"));
const picocolors_1 = require("picocolors");
require("reflect-metadata");
const stats_1 = require("./stats");
(0, dotenv_1.config)();
// TODO: add socket event transmission
let cores = 1;
try {
    cores = Number(process.env.THREADS) || os_1.default.cpus().length;
}
catch {
    console.log("[API] Failed to get thread count! Using 1...");
}
if (cluster_1.default.isMaster) {
    function getCommitOrFail() {
        try {
            return (0, child_process_1.execSync)("git rev-parse HEAD").toString().trim();
        }
        catch (e) {
            return null;
        }
    }
    const commit = getCommitOrFail();
    console.log((0, picocolors_1.bold)(`
███████╗ ██████╗ ███████╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗
██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗
█████╗  ██║   ██║███████╗███████╗██║     ██║   ██║██████╔╝██║  ██║
██╔══╝  ██║   ██║╚════██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║
██║     ╚██████╔╝███████║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝
╚═╝      ╚═════╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝

		fosscord-server | ${(0, picocolors_1.yellow)(`Pre-release (${commit !== null ? commit.slice(0, 7) : "Unknown (Git cannot be found)"})`)}

Commit Hash: ${commit !== null ? `${(0, picocolors_1.cyan)(commit)} (${(0, picocolors_1.yellow)(commit.slice(0, 7))})` : "Unknown (Git cannot be found)"}
Cores: ${(0, picocolors_1.cyan)(os_1.default.cpus().length)} (Using ${cores} thread(s).)
`));
    if (commit == null) {
        console.log((0, picocolors_1.yellow)(`Warning: Git is not installed or not in PATH.`));
    }
    (0, stats_1.initStats)();
    console.log(`[Process] starting with ${cores} threads`);
    if (cores === 1) {
        require("./Server");
    }
    else {
        process.env.EVENT_TRANSMISSION = "process";
        // Fork workers.
        for (let i = 0; i < cores; i++) {
            // Delay each worker start if using sqlite database to prevent locking it
            let delay = process.env.DATABASE?.includes("://") ? 0 : i * 1000;
            setTimeout(() => {
                cluster_1.default.fork();
                console.log(`[Process] worker ${(0, picocolors_1.cyan)(i)} started.`);
            }, delay);
        }
        cluster_1.default.on("message", (sender, message) => {
            for (const id in cluster_1.default.workers) {
                const worker = cluster_1.default.workers[id];
                if (worker === sender || !worker)
                    continue;
                worker.send(message);
            }
        });
        cluster_1.default.on("exit", (worker, code, signal) => {
            console.log(`[Worker] ${(0, picocolors_1.red)(`died with PID: ${worker.process.pid} , restarting ...`)}`);
            cluster_1.default.fork();
        });
    }
}
else {
    require("./Server");
}
//# sourceMappingURL=start.js.map