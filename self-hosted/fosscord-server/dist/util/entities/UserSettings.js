"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettings = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let UserSettings = class UserSettings extends _1.BaseClassWithoutId {
    id;
    afk_timeout = 3600;
    allow_accessibility_detection = true;
    animate_emoji = true;
    animate_stickers = 0;
    contact_sync_enabled = false;
    convert_emoticons = false;
    custom_status = null;
    default_guilds_restricted = false;
    detect_platform_accounts = false;
    developer_mode = true;
    disable_games_tab = true;
    enable_tts_command = false;
    explicit_content_filter = 0;
    friend_source_flags = { all: true };
    gateway_connected = false;
    gif_auto_play = false;
    guild_folders = []; // every top guild is displayed as a "folder"
    guild_positions = []; // guild ids ordered by position
    inline_attachment_media = true;
    inline_embed_media = true;
    locale = "en-US"; // en_US
    message_display_compact = false;
    native_phone_integration_enabled = true;
    render_embeds = true;
    render_reactions = true;
    restricted_guilds = [];
    show_current_game = true;
    status = "online";
    stream_notifications_enabled = false;
    theme = "dark"; // dark
    timezone_offset = 0; // e.g -60
};
tslib_1.__decorate([
    (0, _1.PrimaryIdColumn)(),
    tslib_1.__metadata("design:type", String)
], UserSettings.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UserSettings.prototype, "afk_timeout", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "allow_accessibility_detection", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "animate_emoji", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UserSettings.prototype, "animate_stickers", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "contact_sync_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "convert_emoticons", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
    tslib_1.__metadata("design:type", Object)
], UserSettings.prototype, "custom_status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "default_guilds_restricted", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "detect_platform_accounts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "developer_mode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "disable_games_tab", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "enable_tts_command", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UserSettings.prototype, "explicit_content_filter", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
    tslib_1.__metadata("design:type", Object)
], UserSettings.prototype, "friend_source_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "gateway_connected", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "gif_auto_play", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
    tslib_1.__metadata("design:type", Array)
], UserSettings.prototype, "guild_folders", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
    tslib_1.__metadata("design:type", Array)
], UserSettings.prototype, "guild_positions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "inline_attachment_media", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "inline_embed_media", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserSettings.prototype, "locale", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "message_display_compact", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "native_phone_integration_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "render_embeds", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "render_reactions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
    tslib_1.__metadata("design:type", Array)
], UserSettings.prototype, "restricted_guilds", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "show_current_game", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserSettings.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], UserSettings.prototype, "stream_notifications_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserSettings.prototype, "theme", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UserSettings.prototype, "timezone_offset", void 0);
UserSettings = tslib_1.__decorate([
    (0, typeorm_1.Entity)("user_settings")
], UserSettings);
exports.UserSettings = UserSettings;
//# sourceMappingURL=UserSettings.js.map