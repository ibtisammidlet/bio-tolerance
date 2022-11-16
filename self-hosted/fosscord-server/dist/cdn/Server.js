"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDNServer = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const lambert_server_1 = require("lambert-server");
const path_1 = tslib_1.__importDefault(require("path"));
const avatars_1 = tslib_1.__importDefault(require("./routes/avatars"));
const guild_profiles_1 = tslib_1.__importDefault(require("./routes/guild-profiles"));
const role_icons_1 = tslib_1.__importDefault(require("./routes/role-icons"));
class CDNServer extends lambert_server_1.Server {
    constructor(options) {
        super(options);
    }
    async start() {
        await (0, util_1.getOrInitialiseDatabase)();
        await util_1.Config.init();
        this.app.use((req, res, next) => {
            res.set("Access-Control-Allow-Origin", "*");
            // TODO: use better CSP policy
            res.set("Content-security-policy", "default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';");
            res.set("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers") || "*");
            res.set("Access-Control-Allow-Methods", req.header("Access-Control-Request-Methods") || "*");
            next();
        });
        this.app.use(body_parser_1.default.json({ inflate: true, limit: "10mb" }));
        await (0, util_1.registerRoutes)(this, path_1.default.join(__dirname, "routes/"));
        this.app.use("/icons/", avatars_1.default);
        this.log("verbose", "[Server] Route /icons registered");
        this.app.use("/role-icons/", role_icons_1.default);
        this.log("verbose", "[Server] Route /role-icons registered");
        this.app.use("/emojis/", avatars_1.default);
        this.log("verbose", "[Server] Route /emojis registered");
        this.app.use("/stickers/", avatars_1.default);
        this.log("verbose", "[Server] Route /stickers registered");
        this.app.use("/banners/", avatars_1.default);
        this.log("verbose", "[Server] Route /banners registered");
        this.app.use("/splashes/", avatars_1.default);
        this.log("verbose", "[Server] Route /splashes registered");
        this.app.use("/app-icons/", avatars_1.default);
        this.log("verbose", "[Server] Route /app-icons registered");
        this.app.use("/app-assets/", avatars_1.default);
        this.log("verbose", "[Server] Route /app-assets registered");
        this.app.use("/discover-splashes/", avatars_1.default);
        this.log("verbose", "[Server] Route /discover-splashes registered");
        this.app.use("/team-icons/", avatars_1.default);
        this.log("verbose", "[Server] Route /team-icons registered");
        this.app.use("/channel-icons/", avatars_1.default);
        this.log("verbose", "[Server] Route /channel-icons registered");
        this.app.use("/guilds/:guild_id/users/:user_id/avatars", guild_profiles_1.default);
        this.log("verbose", "[Server] Route /guilds/avatars registered");
        this.app.use("/guilds/:guild_id/users/:user_id/banners", guild_profiles_1.default);
        this.log("verbose", "[Server] Route /guilds/banners registered");
        return super.start();
    }
    async stop() {
        return super.stop();
    }
}
exports.CDNServer = CDNServer;
//# sourceMappingURL=Server.js.map