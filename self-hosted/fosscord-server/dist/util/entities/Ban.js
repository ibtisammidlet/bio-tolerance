"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ban = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
const User_1 = require("./User");
let Ban = class Ban extends BaseClass_1.BaseClass {
    user_id;
    user;
    guild_id;
    guild;
    executor_id;
    executor;
    ip;
    reason;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((ban) => ban.user),
    tslib_1.__metadata("design:type", String)
], Ban.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Ban.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((ban) => ban.guild),
    tslib_1.__metadata("design:type", String)
], Ban.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Ban.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((ban) => ban.executor),
    tslib_1.__metadata("design:type", String)
], Ban.prototype, "executor_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "executor_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Ban.prototype, "executor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Ban.prototype, "ip", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Ban.prototype, "reason", void 0);
Ban = tslib_1.__decorate([
    (0, typeorm_1.Entity)("bans")
], Ban);
exports.Ban = Ban;
//# sourceMappingURL=Ban.js.map