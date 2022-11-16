"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
const User_1 = require("./User");
let Template = class Template extends BaseClass_1.BaseClass {
    code;
    name;
    description;
    usage_count;
    creator_id;
    creator;
    created_at;
    updated_at;
    source_guild_id;
    source_guild;
    serialized_source_guild;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], Template.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Template.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Template.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Template.prototype, "usage_count", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((template) => template.creator),
    tslib_1.__metadata("design:type", String)
], Template.prototype, "creator_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "creator_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Template.prototype, "creator", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], Template.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], Template.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((template) => template.source_guild),
    tslib_1.__metadata("design:type", String)
], Template.prototype, "source_guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "source_guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Template.prototype, "source_guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Template.prototype, "serialized_source_guild", void 0);
Template = tslib_1.__decorate([
    (0, typeorm_1.Entity)("templates")
], Template);
exports.Template = Template;
//# sourceMappingURL=Template.js.map