"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimits = void 0;
const _1 = require(".");
class RateLimits {
    disabled = true;
    ip = {
        count: 500,
        window: 5
    };
    global = {
        count: 250,
        window: 5
    };
    error = {
        count: 10,
        window: 5
    };
    routes = new _1.RouteRateLimit();
}
exports.RateLimits = RateLimits;
//# sourceMappingURL=RateLimits.js.map