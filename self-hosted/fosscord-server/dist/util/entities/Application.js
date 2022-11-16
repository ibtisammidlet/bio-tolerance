"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandOptionType = exports.Application = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Team_1 = require("./Team");
const User_1 = require("./User");
let Application = class Application extends BaseClass_1.BaseClass {
    name;
    icon;
    description;
    summary = "";
    type;
    hook = true;
    bot_public = true;
    bot_require_code_grant = false;
    verify_key;
    owner;
    flags = 0;
    redirect_uris = [];
    rpc_application_state = 0;
    store_application_state = 1;
    verification_state = 1;
    interactions_endpoint_url;
    integration_public = true;
    integration_require_code_grant = false;
    discoverability_state = 1;
    discovery_eligibility_flags = 2240;
    bot;
    tags;
    cover_image; // the application's default rich presence invite cover image hash
    install_params;
    terms_of_service_url;
    privacy_policy_url;
    //just for us
    //@Column({ type: "simple-array", nullable: true })
    //rpc_origins?: string[];
    //@JoinColumn({ name: "guild_id" })
    //@ManyToOne(() => Guild)
    //guild?: Guild; // if this application is a game sold, this field will be the guild to which it has been linked
    //@Column({ nullable: true })
    //primary_sku_id?: string; // if this application is a game sold, this field will be the id of the "Game SKU" that is created,
    //@Column({ nullable: true })
    //slug?: string; // if this application is a game sold, this field will be the URL slug that links to the store page
    team;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "summary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Application.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Application.prototype, "hook", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Application.prototype, "bot_public", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Application.prototype, "bot_require_code_grant", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "verify_key", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "owner_id" }),
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Application.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Application.prototype, "redirect_uris", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "rpc_application_state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "store_application_state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "verification_state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "interactions_endpoint_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Application.prototype, "integration_public", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Application.prototype, "integration_require_code_grant", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "discoverability_state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Application.prototype, "discovery_eligibility_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "bot_user_id" }),
    (0, typeorm_1.OneToOne)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Application.prototype, "bot", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Application.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "cover_image", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Application.prototype, "install_params", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "terms_of_service_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Application.prototype, "privacy_policy_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "team_id" }),
    (0, typeorm_1.ManyToOne)(() => Team_1.Team, {
        onDelete: "CASCADE",
        nullable: true
    }),
    tslib_1.__metadata("design:type", Team_1.Team)
], Application.prototype, "team", void 0);
Application = tslib_1.__decorate([
    (0, typeorm_1.Entity)("applications")
], Application);
exports.Application = Application;
var ApplicationCommandOptionType;
(function (ApplicationCommandOptionType) {
    ApplicationCommandOptionType[ApplicationCommandOptionType["SUB_COMMAND"] = 1] = "SUB_COMMAND";
    ApplicationCommandOptionType[ApplicationCommandOptionType["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
    ApplicationCommandOptionType[ApplicationCommandOptionType["STRING"] = 3] = "STRING";
    ApplicationCommandOptionType[ApplicationCommandOptionType["INTEGER"] = 4] = "INTEGER";
    ApplicationCommandOptionType[ApplicationCommandOptionType["BOOLEAN"] = 5] = "BOOLEAN";
    ApplicationCommandOptionType[ApplicationCommandOptionType["USER"] = 6] = "USER";
    ApplicationCommandOptionType[ApplicationCommandOptionType["CHANNEL"] = 7] = "CHANNEL";
    ApplicationCommandOptionType[ApplicationCommandOptionType["ROLE"] = 8] = "ROLE";
})(ApplicationCommandOptionType = exports.ApplicationCommandOptionType || (exports.ApplicationCommandOptionType = {}));
//# sourceMappingURL=Application.js.map