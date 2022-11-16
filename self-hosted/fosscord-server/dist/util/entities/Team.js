"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const TeamMember_1 = require("./TeamMember");
const User_1 = require("./User");
let Team = class Team extends BaseClass_1.BaseClass {
    icon;
    members;
    name;
    owner_user_id;
    owner_user;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "member_ids" }),
    (0, typeorm_1.OneToMany)(() => TeamMember_1.TeamMember, (member) => member.team, {
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Team.prototype, "members", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((team) => team.owner_user),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "owner_user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "owner_user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Team.prototype, "owner_user", void 0);
Team = tslib_1.__decorate([
    (0, typeorm_1.Entity)("teams")
], Team);
exports.Team = Team;
//# sourceMappingURL=Team.js.map