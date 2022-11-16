"use strict";
var Guild_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guild = exports.PublicGuildRelations = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const __1 = require("..");
const OrmUtils_1 = require("../util/imports/OrmUtils");
const Ban_1 = require("./Ban");
const BaseClass_1 = require("./BaseClass");
const Channel_1 = require("./Channel");
const Emoji_1 = require("./Emoji");
const Invite_1 = require("./Invite");
const Member_1 = require("./Member");
const Role_1 = require("./Role");
const Sticker_1 = require("./Sticker");
const Template_1 = require("./Template");
const User_1 = require("./User");
const VoiceState_1 = require("./VoiceState");
const Webhook_1 = require("./Webhook");
// TODO: application_command_count, application_command_counts: {1: 0, 2: 0, 3: 0}
// TODO: guild_scheduled_events
// TODO: stage_instances
// TODO: threads
// TODO:
// "keywords": [
// 		"Genshin Impact",
// 		"Paimon",
// 		"Honkai Impact",
// 		"ARPG",
// 		"Open-World",
// 		"Waifu",
// 		"Anime",
// 		"Genshin",
// 		"miHoYo",
// 		"Gacha"
// 	],
exports.PublicGuildRelations = ["channels", "emojis", "members", "roles", "stickers", "voice_states", "members.user"];
let Guild = Guild_1 = class Guild extends BaseClass_1.BaseClass {
    afk_channel_id;
    afk_channel;
    afk_timeout = __1.Config.get().defaults.guild.afkTimeout;
    // * commented out -> use owner instead
    // application id of the guild creator if it is bot-created
    // @Column({ nullable: true })
    // application?: string;
    bans;
    banner;
    default_message_notifications = __1.Config.get().defaults.guild.defaultMessageNotifications;
    description;
    discovery_splash;
    explicit_content_filter = __1.Config.get().defaults.guild.explicitContentFilter;
    features; //TODO use enum
    //TODO: https://discord.com/developers/docs/resources/guild#guild-object-guild-features
    primary_category_id;
    icon;
    large;
    max_members = __1.Config.get().limits.guild.maxMembers; // e.g. default 100.000
    max_presences = __1.Config.get().defaults.guild.maxPresences;
    max_video_channel_users = __1.Config.get().defaults.guild.maxVideoChannelUsers; // ? default: 25, is this max 25 streaming or watching
    member_count = 0;
    presence_count = 0; // users online
    members;
    roles;
    channels;
    template_id;
    template;
    emojis;
    stickers;
    invites;
    voice_states;
    webhooks;
    mfa_level;
    name;
    owner_id; // optional to allow for ownerless guilds
    owner; // optional to allow for ownerless guilds
    preferred_locale;
    premium_subscription_count;
    premium_tier; // crowd premium level
    public_updates_channel_id;
    public_updates_channel;
    rules_channel_id;
    rules_channel;
    region;
    splash;
    system_channel_id;
    system_channel;
    system_channel_flags;
    unavailable;
    verification_level;
    welcome_screen;
    widget_channel_id;
    widget_channel;
    widget_enabled;
    nsfw_level;
    nsfw;
    // TODO: nested guilds
    parent;
    // only for developer portal
    permissions;
    //new guild settings, 11/08/2022:
    premium_progress_bar_enabled = false;
    static async createGuild(body) {
        const guild_id = __1.Snowflake.generate();
        const guild = OrmUtils_1.OrmUtils.mergeDeep(new Guild_1(), {
            name: body.name || "Fosscord",
            icon: await (0, __1.handleFile)(`/icons/${guild_id}`, body.icon),
            region: __1.Config.get().regions.default,
            owner_id: body.owner_id,
            afk_timeout: 300,
            default_message_notifications: 1,
            explicit_content_filter: 0,
            features: [],
            primary_category_id: null,
            id: guild_id,
            max_members: 250000,
            max_presences: 250000,
            max_video_channel_users: 200,
            presence_count: 0,
            member_count: 0,
            mfa_level: 0,
            preferred_locale: "en-US",
            premium_subscription_count: 0,
            premium_tier: 0,
            system_channel_flags: 4,
            unavailable: false,
            nsfw: false,
            nsfw_level: 0,
            verification_level: 0,
            welcome_screen: {
                enabled: false,
                description: "Fill in your description",
                welcome_channels: []
            },
            widget_enabled: true // NB: don't set it as false to prevent artificial restrictions
        });
        await guild.save();
        // we have to create the role _after_ the guild because else we would get a "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed" error
        // TODO: make the @everyone a pseudorole that is dynamically generated at runtime so we can save storage
        let role = OrmUtils_1.OrmUtils.mergeDeep(new Role_1.Role(), {
            id: guild_id,
            guild_id: guild_id,
            color: 0,
            hoist: false,
            managed: false,
            // NB: in Fosscord, every role will be non-managed, as we use user-groups instead of roles for managed groups
            mentionable: false,
            name: "@everyone",
            permissions: String("2251804225"),
            position: 0,
            icon: null,
            unicode_emoji: null
        });
        await role.save();
        if (!body.channels || !body.channels.length)
            body.channels = [{ id: "01", type: 0, name: "general" }];
        const ids = new Map();
        body.channels.forEach((x) => {
            if (x.id) {
                ids.set(x.id, __1.Snowflake.generate());
            }
        });
        for (const channel of body.channels?.sort((a, b) => (a.parent_id ? 1 : -1))) {
            let id = ids.get(channel.id) || __1.Snowflake.generate();
            let parent_id = ids.get(channel.parent_id);
            await Channel_1.Channel.createChannel({ ...channel, guild_id, id, parent_id }, body.owner_id, {
                keepId: true,
                skipExistsCheck: true,
                skipPermissionCheck: true,
                skipEventEmit: true
            });
        }
        return guild;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.afk_channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "afk_channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "afk_channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], Guild.prototype, "afk_channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "afk_timeout", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "ban_ids" }),
    (0, typeorm_1.OneToMany)(() => Ban_1.Ban, (ban) => ban.guild, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "bans", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "banner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "default_message_notifications", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "discovery_splash", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "explicit_content_filter", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array" }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "features", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "primary_category_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Guild.prototype, "large", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "max_members", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "max_presences", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "max_video_channel_users", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "member_count", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "presence_count", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Member_1.Member, (member) => member.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "members", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "role_ids" }),
    (0, typeorm_1.OneToMany)(() => Role_1.Role, (role) => role.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "channel_ids" }),
    (0, typeorm_1.OneToMany)(() => Channel_1.Channel, (channel) => channel.guild, {
        cascade: true,
        orphanedRowAction: "delete"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "channels", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.template),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "template_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "template_id", referencedColumnName: "id" }),
    (0, typeorm_1.ManyToOne)(() => Template_1.Template),
    tslib_1.__metadata("design:type", Template_1.Template)
], Guild.prototype, "template", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "emoji_ids" }),
    (0, typeorm_1.OneToMany)(() => Emoji_1.Emoji, (emoji) => emoji.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "emojis", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "sticker_ids" }),
    (0, typeorm_1.OneToMany)(() => Sticker_1.Sticker, (sticker) => sticker.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "stickers", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "invite_ids" }),
    (0, typeorm_1.OneToMany)(() => Invite_1.Invite, (invite) => invite.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "invites", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "voice_state_ids" }),
    (0, typeorm_1.OneToMany)(() => VoiceState_1.VoiceState, (voicestate) => voicestate.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "voice_states", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "webhook_ids" }),
    (0, typeorm_1.OneToMany)(() => Webhook_1.Webhook, (webhook) => webhook.guild, {
        cascade: true,
        orphanedRowAction: "delete",
        onDelete: "CASCADE"
    }),
    tslib_1.__metadata("design:type", Array)
], Guild.prototype, "webhooks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "mfa_level", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.owner),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "owner_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "owner_id", referencedColumnName: "id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Guild.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "preferred_locale", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "premium_subscription_count", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "premium_tier", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.public_updates_channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "public_updates_channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "public_updates_channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], Guild.prototype, "public_updates_channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.rules_channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "rules_channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "rules_channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "rules_channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "region", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "splash", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.system_channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "system_channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "system_channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], Guild.prototype, "system_channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "system_channel_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Guild.prototype, "unavailable", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "verification_level", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    tslib_1.__metadata("design:type", Object)
], Guild.prototype, "welcome_screen", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, typeorm_1.RelationId)((guild) => guild.widget_channel),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "widget_channel_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "widget_channel_id" }),
    (0, typeorm_1.ManyToOne)(() => Channel_1.Channel),
    tslib_1.__metadata("design:type", Channel_1.Channel)
], Guild.prototype, "widget_channel", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Guild.prototype, "widget_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Guild.prototype, "nsfw_level", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Guild.prototype, "nsfw", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Guild.prototype, "parent", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Guild.prototype, "premium_progress_bar_enabled", void 0);
Guild = Guild_1 = tslib_1.__decorate([
    (0, typeorm_1.Entity)("guilds")
], Guild);
exports.Guild = Guild;
//# sourceMappingURL=Guild.js.map