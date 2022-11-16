"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
// TODO: categories:
// [{
// 	"id": 16,
// 	"default": "Anime & Manga",
// 	"localizations": {
// 			"de": "Anime & Manga",
// 			"fr": "Anim\u00e9s et mangas",
// 			"ru": "\u0410\u043d\u0438\u043c\u0435 \u0438 \u043c\u0430\u043d\u0433\u0430"
// 		}
// 	},
// 	"is_primary": false/true
// }]
// Also populate discord default categories
let Categories = class Categories extends BaseClass_1.BaseClassWithoutId {
    // Not using snowflake
    id;
    name;
    localizations;
    is_primary;
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Categories.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Categories.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    tslib_1.__metadata("design:type", String)
], Categories.prototype, "localizations", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Categories.prototype, "is_primary", void 0);
Categories = tslib_1.__decorate([
    (0, typeorm_1.Entity)("categories")
], Categories);
exports.Categories = Categories;
//# sourceMappingURL=Categories.js.map