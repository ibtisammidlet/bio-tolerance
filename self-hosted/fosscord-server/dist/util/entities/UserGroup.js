"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroup = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
let UserGroup = class UserGroup extends BaseClass_1.BaseClass {
    color;
    hoist;
    controller;
    mentionable_by;
    name;
    rights;
    icon;
    parent;
    associciations;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], UserGroup.prototype, "color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], UserGroup.prototype, "hoist", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "controller", referencedColumnName: "id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], UserGroup.prototype, "controller", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "mentionable_by", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "rights", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserGroup.prototype, "parent", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], UserGroup.prototype, "associciations", void 0);
UserGroup = tslib_1.__decorate([
    (0, typeorm_1.Entity)("groups")
], UserGroup);
exports.UserGroup = UserGroup;
//# sourceMappingURL=UserGroup.js.map