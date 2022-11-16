"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuritySettings = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const util_1 = require("../util");
const BitField_1 = require("../util/BitField");
const BaseClass_1 = require("./BaseClass");
let SecuritySettings = class SecuritySettings extends BaseClass_1.BaseClass {
    guild_id;
    channel_id;
    encryption_permission_mask;
    allowed_algorithms;
    current_algorithm;
    used_since_message;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", util_1.Snowflake)
], SecuritySettings.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", util_1.Snowflake)
], SecuritySettings.prototype, "channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", BitField_1.BitField)
], SecuritySettings.prototype, "encryption_permission_mask", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Array)
], SecuritySettings.prototype, "allowed_algorithms", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], SecuritySettings.prototype, "current_algorithm", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", util_1.Snowflake)
], SecuritySettings.prototype, "used_since_message", void 0);
SecuritySettings = tslib_1.__decorate([
    (0, typeorm_1.Entity)("security_settings")
], SecuritySettings);
exports.SecuritySettings = SecuritySettings;
//# sourceMappingURL=Encryption.js.map