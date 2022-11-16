"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimSpecial = exports.generateCode = exports.checkLength = void 0;
const util_1 = require("#util");
const Base64_1 = require("./Base64");
const Regex_1 = require("./Regex");
function checkLength(str, min, max, key, req) {
    if (str.length < min || str.length > max) {
        throw (0, util_1.FieldErrors)({
            [key]: {
                code: "BASE_TYPE_BAD_LENGTH",
                message: req.t("common:field.BASE_TYPE_BAD_LENGTH", { length: `${min} - ${max}` })
            }
        });
    }
}
exports.checkLength = checkLength;
function generateCode() {
    return (0, Base64_1.ntob)(Date.now() + Math.randomIntBetween(0, 10000));
}
exports.generateCode = generateCode;
function trimSpecial(str) {
    // @ts-ignore
    if (!str)
        return;
    return str.replace(Regex_1.SPECIAL_CHAR, "").trim();
}
exports.trimSpecial = trimSpecial;
//# sourceMappingURL=String.js.map