"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
let UserGroup = class UserGroup extends BaseClass_1.BaseClass {
    parent;
    color;
    hoist;
    mentionable;
    name;
    rights;
    position;
    icon;
    unicode_emoji;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Object)
], UserGroup.prototype, "parent", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], UserGroup.prototype, "color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], UserGroup.prototype, "hoist", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], UserGroup.prototype, "mentionable", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Object)
], UserGroup.prototype, "rights", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], UserGroup.prototype, "position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Object)
], UserGroup.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Object)
], UserGroup.prototype, "unicode_emoji", void 0);
UserGroup = tslib_1.__decorate([
    (0, typeorm_1.Entity)("groups")
], UserGroup);
exports.UserGroup = UserGroup;
//# sourceMappingURL=Group.js.map