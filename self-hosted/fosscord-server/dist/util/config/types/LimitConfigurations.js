"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitsConfiguration = void 0;
const _1 = require(".");
class LimitsConfiguration {
    user = new _1.UserLimits();
    guild = new _1.GuildLimits();
    message = new _1.MessageLimits();
    channel = new _1.ChannelLimits();
    rate = new _1.RateLimits();
    absoluteRate = new _1.GlobalRateLimits();
}
exports.LimitsConfiguration = LimitsConfiguration;
//# sourceMappingURL=LimitConfigurations.js.map