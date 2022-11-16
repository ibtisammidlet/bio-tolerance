"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedAccount = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
let ConnectedAccount = class ConnectedAccount extends BaseClass_1.BaseClass {
    user_id;
    user;
    access_token;
    friend_sync;
    name;
    revoked;
    show_activity;
    type;
    verified;
    visibility;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((account) => account.user),
    tslib_1.__metadata("design:type", String)
], ConnectedAccount.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], ConnectedAccount.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", String)
], ConnectedAccount.prototype, "access_token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], ConnectedAccount.prototype, "friend_sync", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ConnectedAccount.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], ConnectedAccount.prototype, "revoked", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], ConnectedAccount.prototype, "show_activity", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ConnectedAccount.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], ConnectedAccount.prototype, "verified", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Number)
], ConnectedAccount.prototype, "visibility", void 0);
ConnectedAccount = tslib_1.__decorate([
    (0, typeorm_1.Entity)("connected_accounts")
], ConnectedAccount);
exports.ConnectedAccount = ConnectedAccount;
//# sourceMappingURL=ConnectedAccount.js.map