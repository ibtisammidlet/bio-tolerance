"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
const Api = tslib_1.__importStar(require("#api"));
const cdn_1 = require("#cdn");
const Gateway = tslib_1.__importStar(require("#gateway"));
const util_1 = require("#util");
const Sentry = tslib_1.__importStar(require("@sentry/node"));
const Tracing = tslib_1.__importStar(require("@sentry/tracing"));
const express_1 = tslib_1.__importDefault(require("express"));
const http_1 = tslib_1.__importDefault(require("http"));
const picocolors_1 = require("picocolors");
// import { PluginLoader } from "#util";
const app = (0, express_1.default)();
const server = http_1.default.createServer();
const port = Number(process.env.PORT) || 3001;
const production = process.env.NODE_ENV == "development" ? false : true;
server.on("request", app);
// @ts-ignore
const api = new Api.FosscordServer({ server, port, production, app });
// @ts-ignore
const cdn = new cdn_1.CDNServer({ server, port, production, app });
// @ts-ignore
const gateway = new Gateway.Server({ server, port, production });
//this is what has been added for the /stop API route
process.on("SIGTERM", () => {
    setTimeout(() => process.exit(0), 3000);
    server.close(() => {
        console.log("Stop API has been successfully POSTed, SIGTERM sent");
    });
});
//this is what has been added for the /stop API route
async function main() {
    server.listen(port);
    await (0, util_1.getOrInitialiseDatabase)();
    await util_1.Config.init();
    //Sentry
    if (util_1.Config.get().sentry.enabled) {
        console.log(`[Bundle] ${(0, picocolors_1.yellow)("You are using Sentry! This may slightly impact performance on large loads!")}`);
        Sentry.init({
            dsn: util_1.Config.get().sentry.endpoint,
            integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express({ app })],
            tracesSampleRate: util_1.Config.get().sentry.traceSampleRate,
            environment: util_1.Config.get().sentry.environment
        });
        app.use(Sentry.Handlers.requestHandler());
        app.use(Sentry.Handlers.tracingHandler());
    }
    await Promise.all([api.start(), cdn.start(), gateway.start()]);
    if (util_1.Config.get().sentry.enabled) {
        app.use(Sentry.Handlers.errorHandler());
        app.use(function onError(err, req, res, next) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        });
    }
    console.log(`[Server] ${(0, picocolors_1.green)(`listening on port ${(0, picocolors_1.bold)(port)}`)}`);
    // PluginLoader.loadPlugins();
}
main().catch(console.error);
//# sourceMappingURL=Server.js.map