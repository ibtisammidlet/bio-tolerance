"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const url_1 = require("url");
const CDN_1 = require("../util/CDN");
const BaseClass_1 = require("./BaseClass");
let Attachment = class Attachment extends BaseClass_1.BaseClass {
    filename; // name of file attached
    size; // size of file in bytes
    url; // source url of file
    proxy_url; // a proxied url of file
    height; // height of file (if image)
    width; // width of file (if image)
    content_type;
    message_id;
    message;
    onDelete() {
        return (0, CDN_1.deleteFile)(new url_1.URL(this.url).pathname);
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Attachment.prototype, "filename", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Attachment.prototype, "size", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Attachment.prototype, "url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Attachment.prototype, "proxy_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Attachment.prototype, "height", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Attachment.prototype, "width", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Attachment.prototype, "content_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((attachment) => attachment.message),
    tslib_1.__metadata("design:type", String)
], Attachment.prototype, "message_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "message_id" }),
    (0, typeorm_1.ManyToOne)(() => require("./Message").Message, (message) => message.attachments, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Object)
], Attachment.prototype, "message", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeRemove)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Attachment.prototype, "onDelete", null);
Attachment = tslib_1.__decorate([
    (0, typeorm_1.Entity)("attachments")
], Attachment);
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map