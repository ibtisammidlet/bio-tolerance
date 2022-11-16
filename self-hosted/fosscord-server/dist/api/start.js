"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
const cluster_1 = tslib_1.__importDefault(require("cluster"));
const dotenv_1 = require("dotenv");
const os_1 = tslib_1.__importDefault(require("os"));
const Server_1 = require("./Server");
(0, dotenv_1.config)();
let cores = 1;
try {
    cores = Number(process.env.THREADS) || os_1.default.cpus().length;
}
catch {
    console.log("[API] Failed to get thread count! Using 1...");
}
if (cluster_1.default.isMaster && process.env.NODE_ENV == "production") {
    console.log(`Primary ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < cores; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died, restart worker`);
        cluster_1.default.fork();
    });
}
else {
    let port = Number(process.env.PORT) || 3001;
    const server = new Server_1.FosscordServer({ port });
    server.start().catch(console.error);
    // @ts-ignore
    global.server = server;
}
//# sourceMappingURL=start.js.map