"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Release = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
let Release = class Release extends BaseClass_1.BaseClass {
    name;
    pub_date;
    url;
    deb_url;
    osx_url;
    win_url;
    notes;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "pub_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "deb_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "osx_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "win_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Release.prototype, "notes", void 0);
Release = tslib_1.__decorate([
    (0, typeorm_1.Entity)("client_release")
], Release);
exports.Release = Release;
//# sourceMappingURL=ClientRelease.js.map