"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genVoiceToken = exports.genSessionId = void 0;
function genSessionId() {
    return genRanHex(32);
}
exports.genSessionId = genSessionId;
function genVoiceToken() {
    return genRanHex(16);
}
exports.genVoiceToken = genVoiceToken;
function genRanHex(size) {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
}
//# sourceMappingURL=SessionUtils.js.map