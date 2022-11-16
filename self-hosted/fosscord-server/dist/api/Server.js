"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FosscordServer = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const express_1 = require("express");
const lambert_server_1 = require("lambert-server");
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const path_1 = tslib_1.__importDefault(require("path"));
const picocolors_1 = require("picocolors");
const middlewares_1 = require("./middlewares/");
const BodyParser_1 = require("./middlewares/BodyParser");
const ErrorHandler_1 = require("./middlewares/ErrorHandler");
const RateLimit_1 = require("./middlewares/RateLimit");
const TestClient_1 = tslib_1.__importDefault(require("./middlewares/TestClient"));
const Translation_1 = require("./middlewares/Translation");
const Instance_1 = require("./util/handlers/Instance");
class FosscordServer extends lambert_server_1.Server {
    constructor(opts) {
        // @ts-ignore
        super({ ...opts, errorHandler: false, jsonBody: false });
    }
    async start() {
        await (0, util_1.getOrInitialiseDatabase)();
        await util_1.Config.init();
        await (0, util_1.initEvent)();
        await (0, Instance_1.initInstance)();
        let logRequests = process.env["LOG_REQUESTS"] != undefined;
        if (logRequests) {
            this.app.use((0, morgan_1.default)("combined", {
                skip: (req, res) => {
                    let skip = !(process.env["LOG_REQUESTS"]?.includes(res.statusCode.toString()) ?? false);
                    if (process.env["LOG_REQUESTS"]?.charAt(0) == "-")
                        skip = !skip;
                    return skip;
                }
            }));
        }
        this.app.use(middlewares_1.CORS);
        this.app.use((0, BodyParser_1.BodyParser)({ inflate: true, limit: "10mb" }));
        const app = this.app;
        const api = (0, express_1.Router)(); // @ts-ignore
        this.app = api;
        api.use(middlewares_1.Authentication);
        await (0, RateLimit_1.initRateLimits)(api);
        await (0, Translation_1.initTranslation)(api);
        this.routes = await (0, util_1.registerRoutes)(this, path_1.default.join(__dirname, "routes", "/"));
        api.use("*", (error, req, res, next) => {
            if (error)
                return next(error);
            res.status(404).json({
                message: "404 endpoint not found",
                code: 0
            });
            next();
        });
        this.app = app;
        //app.use("/__development", )
        //app.use("/__internals", )
        app.use("/api/v6", api);
        app.use("/api/v7", api);
        app.use("/api/v8", api);
        app.use("/api/v9", api);
        app.use("/api", api); // allow unversioned requests
        this.app.use(ErrorHandler_1.ErrorHandler);
        (0, TestClient_1.default)(this.app);
        if (logRequests)
            console.log((0, picocolors_1.red)(`Warning: Request logging is enabled! This will spam your console!\nTo disable this, unset the 'LOG_REQUESTS' environment variable!`));
        return super.start();
    }
}
exports.FosscordServer = FosscordServer;
//# sourceMappingURL=Server.js.map