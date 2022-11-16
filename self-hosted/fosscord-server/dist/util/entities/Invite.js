"use strict";
var Invite_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = exports.PublicInviteRelation = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Channel_1 = require("./Channel");
const Guild_1 = require("./Guild");
const Member_1 = require("./Member");
const User_1 = require("./User");
exports.PublicInviteRelation = ["inviter", "guild", "channel"];
let Invite = Invite_1 = class Invite extends BaseClass_1.BaseClassWithoutId {
    code = (0, util_1.random)();
    temporary = true;
    uses = 0;
    max_uses;
    max_age;
    created_at = new Date();
    expires_at;
    guild_id;
    guild;
    channel_id;
    channel;
    inviter_id;
    inviter;
    target_user_id;
    target_user; // could be used for "User specific invites" https://github.com/fosscord/fosscord/issues/62
    target_user_type;
    vanity_url;
    static async joinGuild(user_id, code) {
        const invite = await Invite_1.findOneOrFail({ where: { code } });
        if (invite.uses++ >= invite.max_uses && invite.max_uses !== 0)
            await Invite_1.delete({ code });
        else
            await invite.save();
        await Member_1.Member.addToGuild(user_id, invite.guild_id);
        return invite;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Invite.prototype, "temporary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Invite.prototype, "uses", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Invite.prototype, "max_uses", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Invite.prototype, "max_age", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], Invite.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], Invite.prototype, "expires_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((invite) => invite.guild),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Invite.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((invite) => invite.channel),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], Invite.prototype, "channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((invite) => invite.inviter),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "inviter_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "inviter_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], Invite.prototype, "inviter", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((invite) => invite.target_user),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "target_user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "target_user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", String)
], Invite.prototype, "target_user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Invite.prototype, "target_user_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Invite.prototype, "vanity_url", void 0);
Invite = Invite_1 = tslib_1.__decorate([
    (0, typeorm_1.Entity)("invites")
], Invite);
exports.Invite = Invite;
//# sourceMappingURL=Invite.js.map