"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
let Role = class Role extends BaseClass_1.BaseClass {
    guild_id;
    guild;
    color;
    hoist;
    managed;
    mentionable;
    name;
    permissions;
    position;
    icon;
    unicode_emoji;
    tags;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((role) => role.guild),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Role.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Role.prototype, "color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "hoist", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "managed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "mentionable", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "permissions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Role.prototype, "position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "unicode_emoji", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Role.prototype, "tags", void 0);
Role = tslib_1.__decorate([
    (0, typeorm_1.Entity)("roles")
], Role);
exports.Role = Role;
//# sourceMappingURL=Role.js.map