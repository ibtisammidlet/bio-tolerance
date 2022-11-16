"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadState = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Channel_1 = require("./Channel");
const User_1 = require("./User");
// for read receipts
// notification cursor and public read receipt need to be forwards-only (the former to prevent re-pinging when marked as unread, and the latter to be acceptable as a legal acknowledgement in criminal proceedings), and private read marker needs to be advance-rewind capable
// public read receipt ≥ notification cursor ≥ private fully read marker
let ReadState = class ReadState extends BaseClass_1.BaseClass {
    channel_id;
    channel;
    user_id;
    user;
    // fully read marker
    last_message_id;
    // public read receipt
    public_ack;
    // notification cursor / private read receipt
    notifications_cursor;
    last_pin_timestamp;
    mention_count;
    // @Column({ nullable: true })
    // TODO: derive this from (last_message_id=notifications_cursor=public_ack)=true
    manual;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.RelationId)((read_state) => read_state.channel),
    tslib_1.__metadata("design:type", String)
], ReadState.prototype, "channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], ReadState.prototype, "channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.RelationId)((read_state) => read_state.user),
    tslib_1.__metadata("design:type", String)
], ReadState.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], ReadState.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ReadState.prototype, "last_message_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ReadState.prototype, "public_ack", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ReadState.prototype, "notifications_cursor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], ReadState.prototype, "last_pin_timestamp", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], ReadState.prototype, "mention_count", void 0);
ReadState = tslib_1.__decorate([
    (0, typeorm_1.Entity)("read_states"),
    (0, typeorm_1.Index)(["channel_id", "user_id"], { unique: true })
], ReadState);
exports.ReadState = ReadState;
//# sourceMappingURL=ReadState.js.map