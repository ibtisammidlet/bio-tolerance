"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityConfiguration = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const _1 = require(".");
class SecurityConfiguration {
    //classes
    captcha = new _1.CaptchaConfiguration();
    twoFactor = new _1.TwoFactorConfiguration();
    //base types
    autoUpdate = true;
    requestSignature = crypto_1.default.randomBytes(32).toString("base64");
    jwtSecret = crypto_1.default.randomBytes(256).toString("base64");
    // header to get the real user ip address
    // X-Forwarded-For for nginx/reverse proxies
    // CF-Connecting-IP for cloudflare
    forwadedFor = null;
    ipdataApiKey = "eca677b284b3bac29eb72f5e496aa9047f26543605efe99ff2ce35c9";
    mfaBackupCodeCount = 10;
    mfaBackupCodeBytes = 4;
    statsWorldReadable = true;
    defaultRegistrationTokenExpiration = 1000 * 60 * 60 * 24 * 7; //1 week
}
exports.SecurityConfiguration = SecurityConfiguration;
//# sourceMappingURL=SecurityConfiguration.js.map