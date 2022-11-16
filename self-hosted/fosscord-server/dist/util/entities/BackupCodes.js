"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupCode = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
let BackupCode = class BackupCode extends BaseClass_1.BaseClass {
    user;
    code;
    consumed;
    expired;
};
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, { onDelete: "CASCADE" }),
    tslib_1.__metadata("design:type", User_1.User)
], BackupCode.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BackupCode.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], BackupCode.prototype, "consumed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], BackupCode.prototype, "expired", void 0);
BackupCode = tslib_1.__decorate([
    (0, typeorm_1.Entity)("backup_codes")
], BackupCode);
exports.BackupCode = BackupCode;
//# sourceMappingURL=BackupCodes.js.map