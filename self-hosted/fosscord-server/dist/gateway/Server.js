"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const http_1 = tslib_1.__importDefault(require("http"));
const ws_1 = tslib_1.__importDefault(require("ws"));
const Connection_1 = require("./events/Connection");
dotenv_1.default.config();
class Server {
    ws;
    port;
    server;
    production;
    constructor({ port, server, production }) {
        this.port = port;
        this.production = production || false;
        if (server)
            this.server = server;
        else {
            this.server = http_1.default.createServer(function (req, res) {
                res.writeHead(200).end("Online");
            });
        }
        this.server.on("upgrade", (request, socket, head) => {
            // @ts-ignore
            this.ws.handleUpgrade(request, socket, head, (socket) => {
                this.ws.emit("connection", socket, request);
            });
        });
        this.ws = new ws_1.default.Server({
            maxPayload: 4096,
            noServer: true
        });
        this.ws.on("connection", Connection_1.Connection);
        this.ws.on("error", console.error);
    }
    async start() {
        await (0, util_1.getOrInitialiseDatabase)();
        await util_1.Config.init();
        await (0, util_1.initEvent)();
        if (!this.server.listening) {
            this.server.listen(this.port);
            console.log(`[Gateway] online on 0.0.0.0:${this.port}`);
        }
    }
    async stop() {
        (0, util_1.closeDatabase)();
        this.server.close();
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map