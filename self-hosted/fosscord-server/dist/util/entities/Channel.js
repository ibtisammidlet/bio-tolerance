"use strict";
var Channel_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPermissionOverwriteType = exports.Channel = exports.ChannelType = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const dtos_1 = require("../dtos");
const util_1 = require("../util");
const HTTPError_1 = require("../util/imports/HTTPError");
const OrmUtils_1 = require("../util/imports/OrmUtils");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
const Invite_1 = require("./Invite");
const Message_1 = require("./Message");
const ReadState_1 = require("./ReadState");
const Recipient_1 = require("./Recipient");
const User_1 = require("./User");
const VoiceState_1 = require("./VoiceState");
const Webhook_1 = require("./Webhook");
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["GUILD_TEXT"] = 0] = "GUILD_TEXT";
    ChannelType[ChannelType["DM"] = 1] = "DM";
    ChannelType[ChannelType["GUILD_VOICE"] = 2] = "GUILD_VOICE";
    ChannelType[ChannelType["GROUP_DM"] = 3] = "GROUP_DM";
    ChannelType[ChannelType["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
    ChannelType[ChannelType["GUILD_NEWS"] = 5] = "GUILD_NEWS";
    ChannelType[ChannelType["GUILD_STORE"] = 6] = "GUILD_STORE";
    ChannelType[ChannelType["ENCRYPTED"] = 7] = "ENCRYPTED";
    ChannelType[ChannelType["ENCRYPTED_THREAD"] = 8] = "ENCRYPTED_THREAD";
    ChannelType[ChannelType["TRANSACTIONAL"] = 9] = "TRANSACTIONAL";
    ChannelType[ChannelType["GUILD_NEWS_THREAD"] = 10] = "GUILD_NEWS_THREAD";
    ChannelType[ChannelType["GUILD_PUBLIC_THREAD"] = 11] = "GUILD_PUBLIC_THREAD";
    ChannelType[ChannelType["GUILD_PRIVATE_THREAD"] = 12] = "GUILD_PRIVATE_THREAD";
    ChannelType[ChannelType["GUILD_STAGE_VOICE"] = 13] = "GUILD_STAGE_VOICE";
    ChannelType[ChannelType["DIRECTORY"] = 14] = "DIRECTORY";
    ChannelType[ChannelType["GUILD_FORUM"] = 15] = "GUILD_FORUM";
    ChannelType[ChannelType["TICKET_TRACKER"] = 33] = "TICKET_TRACKER";
    ChannelType[ChannelType["KANBAN"] = 34] = "KANBAN";
    ChannelType[ChannelType["VOICELESS_WHITEBOARD"] = 35] = "VOICELESS_WHITEBOARD";
    ChannelType[ChannelType["CUSTOM_START"] = 64] = "CUSTOM_START";
    ChannelType[ChannelType["UNHANDLED"] = 255] = "UNHANDLED"; // unhandled unowned pass-through channel type
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
let Channel = Channel_1 = class Channel extends BaseClass_1.BaseClass {
    created_at;
    name;
    icon;
    type;
    recipients;
    last_message_id;
    guild_id;
    guild;
    parent_id;
    parent;
    // for group DMs and owned custom channel types
    owner_id;
    owner;
    last_pin_timestamp;
    default_auto_archive_duration;
    position;
    permission_overwrites;
    video_quality_mode;
    bitrate;
    user_limit;
    nsfw;
    rate_limit_per_user;
    topic;
    invites;
    retention_policy_id;
    messages;
    voice_states;
    read_states;
    webhooks;
    flags = 0;
    default_thread_rate_limit_per_user = 0;
    // TODO: DM channel
    static async createChannel(channel, user_id = "0", opts) {
        if (!opts?.skipPermissionCheck) {
            // Always check if user has permission first
            const permissions = await (0, util_1.getPermission)(user_id, channel.guild_id);
            permissions.hasThrow("MANAGE_CHANNELS");
        }
        if (!opts?.skipNameChecks) {
            const guild = await Guild_1.Guild.findOneOrFail({ where: { id: channel.guild_id } });
            if (!guild.features.includes("ALLOW_INVALID_CHANNEL_NAMES") && channel.name) {
                for (let character of util_1.InvisibleCharacters)
                    if (channel.name.includes(character))
                        throw new HTTPError_1.HTTPError("Channel name cannot include invalid characters", 403);
                // Categories and voice skip these checks on discord.com
                const skipChecksTypes = [ChannelType.GUILD_CATEGORY, ChannelType.GUILD_VOICE];
                if ((channel.type && !skipChecksTypes.includes(channel.type)) || guild.features.includes("IRC_LIKE_CHANNEL_NAMES")) {
                    if (channel.name.includes(" "))
                        throw new HTTPError_1.HTTPError("Channel name cannot include invalid characters", 403);
                    if (channel.name.match(/\-\-+/g))
                        throw new HTTPError_1.HTTPError("Channel name cannot include multiple adjacent dashes.", 403);
                    if (channel.name.charAt(0) === "-" || channel.name.charAt(channel.name.length - 1) === "-")
                        throw new HTTPError_1.HTTPError("Channel name cannot start/end with dash.", 403);
                }
                else
                    channel.name = channel.name.trim(); //category names are trimmed client side on discord.com
            }
            if (!guild.features.includes("ALLOW_UNNAMED_CHANNELS")) {
                if (!channel.name)
                    throw new HTTPError_1.HTTPError("Channel name cannot be empty.", 403);
            }
        }
        switch (channel.type) {
            case ChannelType.GUILD_TEXT:
            case ChannelType.GUILD_NEWS:
            case ChannelType.GUILD_VOICE:
                if (channel.parent_id && !opts?.skipExistsCheck) {
                    const exists = await Channel_1.findOneOrFail({ where: { id: channel.parent_id } });
                    if (!exists)
                        throw new HTTPError_1.HTTPError("Parent id channel doesn't exist", 400);
                    if (exists.guild_id !== channel.guild_id)
                        throw new HTTPError_1.HTTPError("The category channel needs to be in the guild");
                }
                break;
            case ChannelType.GUILD_CATEGORY:
            case ChannelType.UNHANDLED:
                break;
            case ChannelType.DM:
            case ChannelType.GROUP_DM:
                throw new HTTPError_1.HTTPError("You can't create a dm channel in a guild");
            case ChannelType.GUILD_STORE:
            default:
                throw new HTTPError_1.HTTPError("Not yet supported");
        }
        if (!channel.permission_overwrites)
            channel.permission_overwrites = [];
        // TODO: eagerly auto generate position of all guild channels
        channel = {
            ...channel,
            ...(!opts?.keepId && { id: util_1.Snowflake.generate() }),
            created_at: new Date(),
            position: (channel.type === ChannelType.UNHANDLED ? 0 : channel.position) || 0
        };
        await Promise.all([
            OrmUtils_1.OrmUtils.mergeDeep(new Channel_1(), channel).save(),
            !opts?.skipEventEmit
                ? (0, util_1.emitEvent)({
                    event: "CHANNEL_CREATE",
                    data: channel,
                    guild_id: channel.guild_id
                })
                : Promise.resolve()
        ]);
        return channel;
    }
    static async createDMChannel(recipients, creator_user_id, name) {
        recipients = recipients.unique().filter((x) => x !== creator_user_id);
        const otherRecipientsUsers = await User_1.User.find({ where: recipients.map((x) => ({ id: x })) });
        // TODO: check config for max number of recipients
        /** if you want to disallow note to self channels, uncomment the conditional below
        if (otherRecipientsUsers.length !== recipients.length) {
            throw new HTTPError("Recipient/s not found");
        }
        **/
        const type = recipients.length > 1 ? ChannelType.GROUP_DM : ChannelType.DM;
        let channel = null;
        const channelRecipients = [...recipients, creator_user_id];
        const userRecipients = await Recipient_1.Recipient.find({
            where: { user_id: creator_user_id },
            relations: ["channel", "channel.recipients"]
        });
        for (let ur of userRecipients) {
            let re = ur.channel.recipients.map((r) => r.user_id);
            if (re.length === channelRecipients.length) {
                if ((0, util_1.containsAll)(re, channelRecipients)) {
                    if (channel == null) {
                        channel = ur.channel;
                        ur = OrmUtils_1.OrmUtils.mergeDeep(ur, { closed: false });
                        await ur.save();
                    }
                }
            }
        }
        if (channel == null) {
            name = (0, util_1.trimSpecial)(name);
            channel = await OrmUtils_1.OrmUtils.mergeDeep(new Channel_1(), {
                name,
                type,
                owner_id: type === ChannelType.DM ? undefined : null,
                created_at: new Date(),
                last_message_id: null,
                recipients: channelRecipients.map((x) => OrmUtils_1.OrmUtils.mergeDeep(new Recipient_1.Recipient(), {
                    user_id: x,
                    closed: !(type === ChannelType.GROUP_DM || x === creator_user_id)
                }))
            }).save();
        }
        const channel_dto = await dtos_1.DmChannelDTO.from(channel);
        if (type === ChannelType.GROUP_DM) {
            for (let recipient of channel.recipients) {
                await (0, util_1.emitEvent)({
                    event: "CHANNEL_CREATE",
                    data: channel_dto.excludedRecipients([recipient.user_id]),
                    user_id: recipient.user_id
                });
            }
        }
        else {
            await (0, util_1.emitEvent)({ event: "CHANNEL_CREATE", data: channel_dto, user_id: creator_user_id });
        }
        if (recipients.length === 1)
            return channel_dto;
        else
            return channel_dto.excludedRecipients([creator_user_id]);
    }
    static async removeRecipientFromChannel(channel, user_id) {
        await Recipient_1.Recipient.delete({ channel_id: channel.id, user_id: user_id });
        channel.recipients = channel.recipients?.filter((r) => r.user_id !== user_id);
        if (channel.recipients?.length === 0) {
            await Channel_1.deleteChannel(channel);
            await (0, util_1.emitEvent)({
                event: "CHANNEL_DELETE",
                data: await dtos_1.DmChannelDTO.from(channel, [user_id]),
                user_id: user_id
            });
            return;
        }
        await (0, util_1.emitEvent)({
            event: "CHANNEL_DELETE",
            data: await dtos_1.DmChannelDTO.from(channel, [user_id]),
            user_id: user_id
        });
        //If the owner leave the server user is the new owner
        if (channel.owner_id === user_id) {
            channel.owner_id = "1"; // The channel is now owned by the server user
            await (0, util_1.emitEvent)({
                event: "CHANNEL_UPDATE",
                data: await dtos_1.DmChannelDTO.from(channel, [user_id]),
                channel_id: channel.id
            });
        }
        await channel.save();
        await (0, util_1.emitEvent)({
            event: "CHANNEL_RECIPIENT_REMOVE",
            data: {
                channel_id: channel.id,
                user: await User_1.User.findOneOrFail({ where: { id: user_id }, select: User_1.PublicUserProjection })
            },
            channel_id: channel.id
        });
    }
    static async deleteChannel(channel) {
        await Message_1.Message.delete({ channel_id: channel.id }); //TODO we should also delete the attachments from the cdn but to do that we need to move cdn.ts in util
        //TODO before deleting the channel we should check and delete other relations
        await Channel_1.delete({ id: channel.id });
    }
    isDm() {
        return this.type === ChannelType.DM || this.type === ChannelType.GROUP_DM;
    }
    // Does the channel support sending messages ( eg categories do not )
    isWritable() {
        const disallowedChannelTypes = [ChannelType.GUILD_CATEGORY, ChannelType.GUILD_STAGE_VOICE, ChannelType.VOICELESS_WHITEBOARD];
        return disallowedChannelTypes.indexOf(this.type) == -1;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], Channel.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Channel.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Recipient_1.Recipient, (recipient) => recipient.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "recipients", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "last_message_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((channel) => channel.guild),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "guild_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "guild_id" }),
    (0, typeorm_1.ManyToOne)(() => Guild_1.Guild, {
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Guild_1.Guild)
], Channel.prototype, "guild", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((channel) => channel.parent),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "parent_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "parent_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1),
    tslib_1.__metadata("design:type", Channel)
], Channel.prototype, "parent", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((channel) => channel.owner),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "owner_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "owner_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Channel.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "last_pin_timestamp", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "default_auto_archive_duration", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "permission_overwrites", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "video_quality_mode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "bitrate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "user_limit", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Channel.prototype, "nsfw", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "rate_limit_per_user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "topic", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Invite_1.Invite, (invite) => invite.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "invites", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Channel.prototype, "retention_policy_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "messages", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => VoiceState_1.VoiceState, (voice_state) => voice_state.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "voice_states", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => ReadState_1.ReadState, (read_state) => read_state.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "read_states", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Webhook_1.Webhook, (webhook) => webhook.channel, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Channel.prototype, "webhooks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Channel.prototype, "default_thread_rate_limit_per_user", void 0);
Channel = Channel_1 = tslib_1.__decorate([
    (0, typeorm_1.Entity)("channels")
], Channel);
exports.Channel = Channel;
var ChannelPermissionOverwriteType;
(function (ChannelPermissionOverwriteType) {
    ChannelPermissionOverwriteType[ChannelPermissionOverwriteType["role"] = 0] = "role";
    ChannelPermissionOverwriteType[ChannelPermissionOverwriteType["member"] = 1] = "member";
    ChannelPermissionOverwriteType[ChannelPermissionOverwriteType["group"] = 2] = "group";
})(ChannelPermissionOverwriteType = exports.ChannelPermissionOverwriteType || (exports.ChannelPermissionOverwriteType = {}));
//# sourceMappingURL=Channel.js.map