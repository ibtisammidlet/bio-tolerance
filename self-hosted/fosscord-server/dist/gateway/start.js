"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
const dotenv_1 = require("dotenv");
const Server_1 = require("./Server");
(0, dotenv_1.config)();
let port = Number(process.env.PORT);
if (isNaN(port))
    port = 3002;
const server = new Server_1.Server({
    port
});
server.start();
//# sourceMappingURL=start.js.map