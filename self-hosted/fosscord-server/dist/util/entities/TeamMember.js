"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = exports.TeamMemberState = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
var TeamMemberState;
(function (TeamMemberState) {
    TeamMemberState[TeamMemberState["INVITED"] = 1] = "INVITED";
    TeamMemberState[TeamMemberState["ACCEPTED"] = 2] = "ACCEPTED";
})(TeamMemberState = exports.TeamMemberState || (exports.TeamMemberState = {}));
let TeamMember = class TeamMember extends BaseClass_1.BaseClass {
    membership_state;
    permissions;
    team_id;
    team;
    user_id;
    user;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], TeamMember.prototype, "membership_state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array" }),
    tslib_1.__metadata("design:type", Array)
], TeamMember.prototype, "permissions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((member) => member.team),
    tslib_1.__metadata("design:type", String)
], TeamMember.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "team_id" }),
    (0, typeorm_1.ManyToOne)(() => require("./Team").Team, (team) => team.members, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Object)
], TeamMember.prototype, "team", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((member) => member.user),
    tslib_1.__metadata("design:type", String)
], TeamMember.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], TeamMember.prototype, "user", void 0);
TeamMember = tslib_1.__decorate([
    (0, typeorm_1.Entity)("team_members")
], TeamMember);
exports.TeamMember = TeamMember;
//# sourceMappingURL=TeamMember.js.map