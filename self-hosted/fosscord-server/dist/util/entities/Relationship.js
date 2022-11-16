"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relationship = exports.RelationshipType = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
var RelationshipType;
(function (RelationshipType) {
    RelationshipType[RelationshipType["outgoing"] = 4] = "outgoing";
    RelationshipType[RelationshipType["incoming"] = 3] = "incoming";
    RelationshipType[RelationshipType["blocked"] = 2] = "blocked";
    RelationshipType[RelationshipType["friends"] = 1] = "friends";
})(RelationshipType = exports.RelationshipType || (exports.RelationshipType = {}));
let Relationship = class Relationship extends BaseClass_1.BaseClass {
    from_id;
    from;
    to_id;
    to;
    nickname;
    type;
    toPublicRelationship() {
        return {
            id: this.to?.id || this.to_id,
            type: this.type,
            nickname: this.nickname,
            user: this.to?.toPublicUser()
        };
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({}),
    (0, typeorm_1.RelationId)((relationship) => relationship.from),
    tslib_1.__metadata("design:type", String)
], Relationship.prototype, "from_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "from_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Relationship.prototype, "from", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({}),
    (0, typeorm_1.RelationId)((relationship) => relationship.to),
    tslib_1.__metadata("design:type", String)
], Relationship.prototype, "to_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "to_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Relationship.prototype, "to", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Relationship.prototype, "nickname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Relationship.prototype, "type", void 0);
Relationship = tslib_1.__decorate([
    (0, typeorm_1.Entity)("relationships"),
    (0, typeorm_1.Index)(["from_id", "to_id"], { unique: true })
], Relationship);
exports.Relationship = Relationship;
//# sourceMappingURL=Relationship.js.map