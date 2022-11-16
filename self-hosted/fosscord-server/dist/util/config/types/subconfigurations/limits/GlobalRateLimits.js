"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalRateLimit = exports.GlobalRateLimits = void 0;
class GlobalRateLimits {
    register = { limit: 25, window: 60 * 60 * 1000, enabled: true };
    sendMessage = { limit: 120, window: 60 * 1000, enabled: true };
}
exports.GlobalRateLimits = GlobalRateLimits;
class GlobalRateLimit {
    limit = 100;
    window = 60 * 60 * 1000;
    enabled = true;
}
exports.GlobalRateLimit = GlobalRateLimit;
//# sourceMappingURL=GlobalRateLimits.js.map