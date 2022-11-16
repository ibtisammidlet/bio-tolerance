"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerPack = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const BaseClass_1 = require("./BaseClass");
let StickerPack = class StickerPack extends BaseClass_1.BaseClass {
    name;
    description;
    banner_asset_id;
    stickers;
    // sku_id: string
    cover_sticker_id;
    cover_sticker;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], StickerPack.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], StickerPack.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], StickerPack.prototype, "banner_asset_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Sticker, (sticker) => sticker.pack, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], StickerPack.prototype, "stickers", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((pack) => pack.cover_sticker),
    tslib_1.__metadata("design:type", String)
], StickerPack.prototype, "cover_sticker_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Sticker, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", _1.Sticker)
], StickerPack.prototype, "cover_sticker", void 0);
StickerPack = tslib_1.__decorate([
    (0, typeorm_1.Entity)("sticker_packs")
], StickerPack);
exports.StickerPack = StickerPack;
//# sourceMappingURL=StickerPack.js.map