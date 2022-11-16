"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sticker = exports.StickerFormatType = exports.StickerType = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
const User_1 = require("./User");
var StickerType;
(function (StickerType) {
    StickerType[StickerType["STANDARD"] = 1] = "STANDARD";
    StickerType[StickerType["GUILD"] = 2] = "GUILD";
})(StickerType = exports.StickerType || (exports.StickerType = {}));
var StickerFormatType;
(function (StickerFormatType) {
    StickerFormatType[StickerFormatType["GIF"] = 0] = "GIF";
    StickerFormatType[StickerFormatType["PNG"] = 1] = "PNG";
    StickerFormatType[StickerFormatType["APNG"] = 2] = "APNG";
    StickerFormatType[StickerFormatType["LOTTIE"] = 3] = "LOTTIE";
})(StickerFormatType = exports.StickerFormatType || (exports.StickerFormatType = {}));
let Sticker = class Sticker extends BaseClass_1.BaseClass {
    name;
    description;
    available;
    tags;
    pack_id;
    pack;
    guild_id;
    guild;
    user_id;
    user;
    type;
    format_type;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Sticker.prototype, "available", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((sticker) => sticker.pack),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "pack_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "pack_id" }),
    (0, typeorm_1.ManyToOne)(() => require("./StickerPack").StickerPack, {
        onDelete: "CASCADE",
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], Sticker.prototype, "pack", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Sticker.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Sticker.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Sticker.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Sticker.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Sticker.prototype, "format_type", void 0);
Sticker = tslib_1.__decorate([
    (0, typeorm_1.Entity)("stickers")
], Sticker);
exports.Sticker = Sticker;
//# sourceMappingURL=Sticker.js.map