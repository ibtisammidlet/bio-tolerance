"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = exports.AuditLogEvents = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const User_1 = require("./User");
var AuditLogEvents;
(function (AuditLogEvents) {
    // guild level
    AuditLogEvents[AuditLogEvents["GUILD_UPDATE"] = 1] = "GUILD_UPDATE";
    AuditLogEvents[AuditLogEvents["GUILD_IMPORT"] = 2] = "GUILD_IMPORT";
    AuditLogEvents[AuditLogEvents["GUILD_EXPORTED"] = 3] = "GUILD_EXPORTED";
    AuditLogEvents[AuditLogEvents["GUILD_ARCHIVE"] = 4] = "GUILD_ARCHIVE";
    AuditLogEvents[AuditLogEvents["GUILD_UNARCHIVE"] = 5] = "GUILD_UNARCHIVE";
    // join-leave
    AuditLogEvents[AuditLogEvents["USER_JOIN"] = 6] = "USER_JOIN";
    AuditLogEvents[AuditLogEvents["USER_LEAVE"] = 7] = "USER_LEAVE";
    // channels
    AuditLogEvents[AuditLogEvents["CHANNEL_CREATE"] = 10] = "CHANNEL_CREATE";
    AuditLogEvents[AuditLogEvents["CHANNEL_UPDATE"] = 11] = "CHANNEL_UPDATE";
    AuditLogEvents[AuditLogEvents["CHANNEL_DELETE"] = 12] = "CHANNEL_DELETE";
    // permission overrides
    AuditLogEvents[AuditLogEvents["CHANNEL_OVERWRITE_CREATE"] = 13] = "CHANNEL_OVERWRITE_CREATE";
    AuditLogEvents[AuditLogEvents["CHANNEL_OVERWRITE_UPDATE"] = 14] = "CHANNEL_OVERWRITE_UPDATE";
    AuditLogEvents[AuditLogEvents["CHANNEL_OVERWRITE_DELETE"] = 15] = "CHANNEL_OVERWRITE_DELETE";
    // kick and ban
    AuditLogEvents[AuditLogEvents["MEMBER_KICK"] = 20] = "MEMBER_KICK";
    AuditLogEvents[AuditLogEvents["MEMBER_PRUNE"] = 21] = "MEMBER_PRUNE";
    AuditLogEvents[AuditLogEvents["MEMBER_BAN_ADD"] = 22] = "MEMBER_BAN_ADD";
    AuditLogEvents[AuditLogEvents["MEMBER_BAN_REMOVE"] = 23] = "MEMBER_BAN_REMOVE";
    // member updates
    AuditLogEvents[AuditLogEvents["MEMBER_UPDATE"] = 24] = "MEMBER_UPDATE";
    AuditLogEvents[AuditLogEvents["MEMBER_ROLE_UPDATE"] = 25] = "MEMBER_ROLE_UPDATE";
    AuditLogEvents[AuditLogEvents["MEMBER_MOVE"] = 26] = "MEMBER_MOVE";
    AuditLogEvents[AuditLogEvents["MEMBER_DISCONNECT"] = 27] = "MEMBER_DISCONNECT";
    AuditLogEvents[AuditLogEvents["BOT_ADD"] = 28] = "BOT_ADD";
    // roles
    AuditLogEvents[AuditLogEvents["ROLE_CREATE"] = 30] = "ROLE_CREATE";
    AuditLogEvents[AuditLogEvents["ROLE_UPDATE"] = 31] = "ROLE_UPDATE";
    AuditLogEvents[AuditLogEvents["ROLE_DELETE"] = 32] = "ROLE_DELETE";
    AuditLogEvents[AuditLogEvents["ROLE_SWAP"] = 33] = "ROLE_SWAP";
    // invites
    AuditLogEvents[AuditLogEvents["INVITE_CREATE"] = 40] = "INVITE_CREATE";
    AuditLogEvents[AuditLogEvents["INVITE_UPDATE"] = 41] = "INVITE_UPDATE";
    AuditLogEvents[AuditLogEvents["INVITE_DELETE"] = 42] = "INVITE_DELETE";
    // webhooks
    AuditLogEvents[AuditLogEvents["WEBHOOK_CREATE"] = 50] = "WEBHOOK_CREATE";
    AuditLogEvents[AuditLogEvents["WEBHOOK_UPDATE"] = 51] = "WEBHOOK_UPDATE";
    AuditLogEvents[AuditLogEvents["WEBHOOK_DELETE"] = 52] = "WEBHOOK_DELETE";
    AuditLogEvents[AuditLogEvents["WEBHOOK_SWAP"] = 53] = "WEBHOOK_SWAP";
    // custom emojis
    AuditLogEvents[AuditLogEvents["EMOJI_CREATE"] = 60] = "EMOJI_CREATE";
    AuditLogEvents[AuditLogEvents["EMOJI_UPDATE"] = 61] = "EMOJI_UPDATE";
    AuditLogEvents[AuditLogEvents["EMOJI_DELETE"] = 62] = "EMOJI_DELETE";
    AuditLogEvents[AuditLogEvents["EMOJI_SWAP"] = 63] = "EMOJI_SWAP";
    // deletion
    AuditLogEvents[AuditLogEvents["MESSAGE_CREATE"] = 70] = "MESSAGE_CREATE";
    AuditLogEvents[AuditLogEvents["MESSAGE_EDIT"] = 71] = "MESSAGE_EDIT";
    AuditLogEvents[AuditLogEvents["MESSAGE_DELETE"] = 72] = "MESSAGE_DELETE";
    AuditLogEvents[AuditLogEvents["MESSAGE_BULK_DELETE"] = 73] = "MESSAGE_BULK_DELETE";
    // pinning
    AuditLogEvents[AuditLogEvents["MESSAGE_PIN"] = 74] = "MESSAGE_PIN";
    AuditLogEvents[AuditLogEvents["MESSAGE_UNPIN"] = 75] = "MESSAGE_UNPIN";
    // integrations
    AuditLogEvents[AuditLogEvents["INTEGRATION_CREATE"] = 80] = "INTEGRATION_CREATE";
    AuditLogEvents[AuditLogEvents["INTEGRATION_UPDATE"] = 81] = "INTEGRATION_UPDATE";
    AuditLogEvents[AuditLogEvents["INTEGRATION_DELETE"] = 82] = "INTEGRATION_DELETE";
    // stage actions
    AuditLogEvents[AuditLogEvents["STAGE_INSTANCE_CREATE"] = 83] = "STAGE_INSTANCE_CREATE";
    AuditLogEvents[AuditLogEvents["STAGE_INSTANCE_UPDATE"] = 84] = "STAGE_INSTANCE_UPDATE";
    AuditLogEvents[AuditLogEvents["STAGE_INSTANCE_DELETE"] = 85] = "STAGE_INSTANCE_DELETE";
    // stickers
    AuditLogEvents[AuditLogEvents["STICKER_CREATE"] = 90] = "STICKER_CREATE";
    AuditLogEvents[AuditLogEvents["STICKER_UPDATE"] = 91] = "STICKER_UPDATE";
    AuditLogEvents[AuditLogEvents["STICKER_DELETE"] = 92] = "STICKER_DELETE";
    AuditLogEvents[AuditLogEvents["STICKER_SWAP"] = 93] = "STICKER_SWAP";
    // threads
    AuditLogEvents[AuditLogEvents["THREAD_CREATE"] = 110] = "THREAD_CREATE";
    AuditLogEvents[AuditLogEvents["THREAD_UPDATE"] = 111] = "THREAD_UPDATE";
    AuditLogEvents[AuditLogEvents["THREAD_DELETE"] = 112] = "THREAD_DELETE";
    // application commands
    AuditLogEvents[AuditLogEvents["APPLICATION_COMMAND_PERMISSION_UPDATE"] = 121] = "APPLICATION_COMMAND_PERMISSION_UPDATE";
    // automod
    AuditLogEvents[AuditLogEvents["POLICY_CREATE"] = 140] = "POLICY_CREATE";
    AuditLogEvents[AuditLogEvents["POLICY_UPDATE"] = 141] = "POLICY_UPDATE";
    AuditLogEvents[AuditLogEvents["POLICY_DELETE"] = 142] = "POLICY_DELETE";
    AuditLogEvents[AuditLogEvents["MESSAGE_BLOCKED_BY_POLICIES"] = 143] = "MESSAGE_BLOCKED_BY_POLICIES";
    // instance policies affecting the guild
    AuditLogEvents[AuditLogEvents["GUILD_AFFECTED_BY_POLICIES"] = 216] = "GUILD_AFFECTED_BY_POLICIES";
    // message moves
    AuditLogEvents[AuditLogEvents["IN_GUILD_MESSAGE_MOVE"] = 223] = "IN_GUILD_MESSAGE_MOVE";
    AuditLogEvents[AuditLogEvents["CROSS_GUILD_MESSAGE_MOVE"] = 224] = "CROSS_GUILD_MESSAGE_MOVE";
    // message routing
    AuditLogEvents[AuditLogEvents["ROUTE_CREATE"] = 225] = "ROUTE_CREATE";
    AuditLogEvents[AuditLogEvents["ROUTE_UPDATE"] = 226] = "ROUTE_UPDATE";
})(AuditLogEvents = exports.AuditLogEvents || (exports.AuditLogEvents = {}));
let AuditLog = class AuditLog extends BaseClass_1.BaseClass {
    target;
    user_id;
    user;
    action_type;
    options;
    changes;
    reason;
};
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "target_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], AuditLog.prototype, "target", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((auditlog) => auditlog.user),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.id),
    tslib_1.__metadata("design:type", User_1.User)
], AuditLog.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], AuditLog.prototype, "action_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], AuditLog.prototype, "options", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({ type: "simple-json" }),
    tslib_1.__metadata("design:type", Array)
], AuditLog.prototype, "changes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], AuditLog.prototype, "reason", void 0);
AuditLog = tslib_1.__decorate([
    (0, typeorm_1.Entity)("audit_logs")
], AuditLog);
exports.AuditLog = AuditLog;
//# sourceMappingURL=AuditLog.js.map