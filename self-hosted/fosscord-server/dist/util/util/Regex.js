"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HERE_MENTION = exports.EVERYONE_MENTION = exports.ROLE_MENTION = exports.USER_MENTION = exports.CHANNEL_MENTION = exports.SPECIAL_CHAR = exports.DOUBLE_WHITE_SPACE = void 0;
exports.DOUBLE_WHITE_SPACE = /\s\s+/g;
exports.SPECIAL_CHAR = /[@#`:\r\n\t\f\v\p{C}]/gu;
exports.CHANNEL_MENTION = /<#(\d+)>/g;
exports.USER_MENTION = /<@!?(\d+)>/g;
exports.ROLE_MENTION = /<@&(\d+)>/g;
exports.EVERYONE_MENTION = /@everyone/g;
exports.HERE_MENTION = /@here/g;
//# sourceMappingURL=Regex.js.map