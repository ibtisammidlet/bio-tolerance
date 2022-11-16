"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const Server_1 = require("./Server");
const server = new Server_1.CDNServer({ port: Number(process.env.PORT) || 3003 });
server
    .start()
    .then(() => {
    console.log("[Server] started on :" + server.options.port);
})
    .catch((e) => console.error("[Server] Error starting: ", e));
module.exports = server;
//# sourceMappingURL=start.js.map