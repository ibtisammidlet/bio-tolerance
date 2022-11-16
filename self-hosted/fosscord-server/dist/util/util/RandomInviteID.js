"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snowflakeBasedInvite = exports.random = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
function random(length = 6, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    // Declare all characters
    // Pick characers randomly
    let str = "";
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(crypto_1.default.randomInt(chars.length)));
    }
    return str;
}
exports.random = random;
function snowflakeBasedInvite() {
    // Declare all characters
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let base = BigInt(chars.length);
    let snowflake = util_1.Snowflake.generateWorkerProcess();
    // snowflakes hold ~10.75 characters worth of entropy;
    // safe to generate a 8-char invite out of them
    let str = "";
    for (let i = 0; i < 10; i++) {
        str.concat(chars.charAt(Number(snowflake % base)));
        snowflake = snowflake / base;
    }
    return str.substr(3, 8).split("").reverse().join("");
}
exports.snowflakeBasedInvite = snowflakeBasedInvite;
//# sourceMappingURL=RandomInviteID.js.map