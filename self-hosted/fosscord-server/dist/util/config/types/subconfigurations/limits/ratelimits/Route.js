"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRateLimit = void 0;
const Auth_1 = require("./Auth");
class RouteRateLimit {
    guild = {
        count: 5,
        window: 5
    };
    webhook = {
        count: 10,
        window: 5
    };
    channel = {
        count: 10,
        window: 5
    };
    auth = new Auth_1.AuthRateLimit();
}
exports.RouteRateLimit = RouteRateLimit;
//# sourceMappingURL=Route.js.map