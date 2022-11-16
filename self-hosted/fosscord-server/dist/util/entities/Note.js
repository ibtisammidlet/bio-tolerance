"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
let Note = class Note extends BaseClass_1.BaseClass {
    owner;
    target;
    content;
};
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "owner_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, { onDelete: "CASCADE" }),
    tslib_1.__metadata("design:type", User_1.User)
], Note.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "target_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, { onDelete: "CASCADE" }),
    tslib_1.__metadata("design:type", User_1.User)
], Note.prototype, "target", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "content", void 0);
Note = tslib_1.__decorate([
    (0, typeorm_1.Entity)("notes"),
    (0, typeorm_1.Unique)(["owner", "target"])
], Note);
exports.Note = Note;
//# sourceMappingURL=Note.js.map