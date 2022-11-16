"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
let Emoji = class Emoji extends BaseClass_1.BaseClass {
    animated;
    available; // whether this emoji can be used, may be false due to various reasons
    guild_id;
    guild;
    user_id;
    user;
    managed;
    name;
    require_colons;
    roles; // roles this emoji is whitelisted to (new discord feature?)
    groups; // user groups this emoji is whitelisted to (Fosscord extension)
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Emoji.prototype, "animated", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Emoji.prototype, "available", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Emoji.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Emoji.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((emoji) => emoji.user),
    tslib_1.__metadata("design:type", String)
], Emoji.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => _1.User),
    tslib_1.__metadata("design:type", _1.User)
], Emoji.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Emoji.prototype, "managed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Emoji.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Emoji.prototype, "require_colons", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array" }),
    tslib_1.__metadata("design:type", Array)
], Emoji.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Emoji.prototype, "groups", void 0);
Emoji = tslib_1.__decorate([
    (0, typeorm_1.Entity)("emojis")
], Emoji);
exports.Emoji = Emoji;
//# sourceMappingURL=Emoji.js.map