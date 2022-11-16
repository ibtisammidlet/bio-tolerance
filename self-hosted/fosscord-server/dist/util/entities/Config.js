"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
let ConfigEntity = class ConfigEntity extends BaseClass_1.BaseClassWithoutId {
    key;
    value;
};
tslib_1.__decorate([
    (0, BaseClass_1.PrimaryIdColumn)(),
    tslib_1.__metadata("design:type", String)
], ConfigEntity.prototype, "key", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], ConfigEntity.prototype, "value", void 0);
ConfigEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)("config")
], ConfigEntity);
exports.ConfigEntity = ConfigEntity;
//# sourceMappingURL=Config.js.map