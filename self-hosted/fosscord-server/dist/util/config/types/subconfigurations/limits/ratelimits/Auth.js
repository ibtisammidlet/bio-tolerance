"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRateLimit = void 0;
class AuthRateLimit {
    login = {
        count: 5,
        window: 60
    };
    register = {
        count: 2,
        window: 60 * 60 * 12
    };
}
exports.AuthRateLimit = AuthRateLimit;
//# sourceMappingURL=Auth.js.map