"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipient = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
let Recipient = class Recipient extends BaseClass_1.BaseClass {
    channel_id;
    channel;
    user_id;
    user;
    closed;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.RelationId)((recipient) => recipient.channel),
    tslib_1.__metadata("design:type", String)
], Recipient.prototype, "channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "channel_id" }),
    (0, typeorm_1.ManyToOne)(() => require("./Channel").Channel, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Object)
], Recipient.prototype, "channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.RelationId)((recipient) => recipient.user),
    tslib_1.__metadata("design:type", String)
], Recipient.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => require("./User").User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Object)
], Recipient.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Recipient.prototype, "closed", void 0);
Recipient = tslib_1.__decorate([
    (0, typeorm_1.Entity)("recipients")
], Recipient);
exports.Recipient = Recipient;
//# sourceMappingURL=Recipient.js.map