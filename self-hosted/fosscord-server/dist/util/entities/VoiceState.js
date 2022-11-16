"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceState = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Channel_1 = require("./Channel");
const Guild_1 = require("./Guild");
const User_1 = require("./User");
//https://gist.github.com/vassjozsef/e482c65df6ee1facaace8b3c9ff66145#file-voice_state-ex
let VoiceState = class VoiceState extends BaseClass_1.BaseClass {
    guild_id;
    guild;
    channel_id;
    channel;
    user_id;
    user;
    // @JoinColumn([{ name: "user_id", referencedColumnName: "id" },{ name: "guild_id", referencedColumnName: "guild_id" }])
    // @ManyToOne(() => Member, {
    // 	onDelete: "CASCADE",
    // })
    //TODO find a way to make it work without breaking Guild.voice_states
    member;
    session_id;
    token;
    deaf;
    mute;
    self_deaf;
    self_mute;
    self_stream;
    self_video;
    suppress; // whether this user is muted by the current user
    request_to_speak_timestamp;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((voice_state) => voice_state.guild),
    tslib_1.__metadata("design:type", String)
], VoiceState.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], VoiceState.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((voice_state) => voice_state.channel),
    tslib_1.__metadata("design:type", String)
], VoiceState.prototype, "channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], VoiceState.prototype, "channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((voice_state) => voice_state.user),
    tslib_1.__metadata("design:type", String)
], VoiceState.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", User_1.User)
], VoiceState.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VoiceState.prototype, "session_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], VoiceState.prototype, "token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "deaf", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "mute", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "self_deaf", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "self_mute", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "self_stream", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "self_video", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], VoiceState.prototype, "suppress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    tslib_1.__metadata("design:type", Date)
], VoiceState.prototype, "request_to_speak_timestamp", void 0);
VoiceState = tslib_1.__decorate([
    (0, typeorm_1.Entity)("voice_states")
], VoiceState);
exports.VoiceState = VoiceState;
//# sourceMappingURL=VoiceState.js.map