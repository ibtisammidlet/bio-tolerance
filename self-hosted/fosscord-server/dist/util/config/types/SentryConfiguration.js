"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryConfiguration = void 0;
const os_1 = require("os");
class SentryConfiguration {
    enabled = false;
    endpoint = "https://05e8e3d005f34b7d97e920ae5870a5e5@sentry.thearcanebrony.net/6";
    traceSampleRate = 1.0;
    environment = (0, os_1.hostname)();
}
exports.SentryConfiguration = SentryConfiguration;
//# sourceMappingURL=SentryConfiguration.js.map