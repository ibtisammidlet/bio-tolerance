"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multer = void 0;
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
exports.multer = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fields: 10,
        files: 10,
        fileSize: 1024 * 1024 * 100 // 100 mb
    }
});
//# sourceMappingURL=multer.js.map