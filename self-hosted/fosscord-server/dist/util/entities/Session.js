"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateSessionProjection = exports.Session = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
//TODO we need to remove all sessions on server start because if the server crashes without closing websockets it won't delete them
let Session = class Session extends BaseClass_1.BaseClass {
    user_id;
    user;
    //TODO check, should be 32 char long hex string
    session_id;
    activities;
    // TODO client_status
    client_info;
    status; //TODO enum
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((session) => session.user),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Session.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: false, select: false }),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "session_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Session.prototype, "activities", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", select: false }),
    tslib_1.__metadata("design:type", Object)
], Session.prototype, "client_info", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "status", void 0);
Session = tslib_1.__decorate([
    (0, typeorm_1.Entity)("sessions")
], Session);
exports.Session = Session;
exports.PrivateSessionProjection = ["user_id", "session_id", "activities", "client_info", "status"];
//# sourceMappingURL=Session.js.map