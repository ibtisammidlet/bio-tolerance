"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
const TemplateGuildProjection = [
    "name",
    "description",
    "region",
    "verification_level",
    "default_message_notifications",
    "explicit_content_filter",
    "preferred_locale",
    "afk_timeout",
    "roles",
    // "channels",
    "afk_channel_id",
    "system_channel_id",
    "system_channel_flags",
    "icon"
];
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    let templates = await util_1.Template.find({ where: { source_guild_id: guild_id } });
    return res.json(templates);
});
router.post("/", (0, api_1.route)({ body: "TemplateCreateSchema", permission: "MANAGE_GUILD" }), async (req, res) => {
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id }, select: TemplateGuildProjection });
    const exists = await util_1.Template.findOneOrFail({ where: { id: guild_id } }).catch((e) => { });
    if (exists)
        throw new util_1.HTTPError("Template already exists", 400);
    const template = await util_1.OrmUtils.mergeDeep(new util_1.Template(), {
        ...req.body,
        code: (0, util_1.generateCode)(),
        creator_id: req.user_id,
        created_at: new Date(),
        updated_at: new Date(),
        source_guild_id: guild_id,
        serialized_source_guild: guild
    }).save();
    res.json(template);
});
router.delete("/:code", (0, api_1.route)({ permission: "MANAGE_GUILD" }), async (req, res) => {
    const { code, guild_id } = req.params;
    const template = await util_1.Template.delete({
        code,
        source_guild_id: guild_id
    });
    res.json(template);
});
router.put("/:code", (0, api_1.route)({ permission: "MANAGE_GUILD" }), async (req, res) => {
    const { code, guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id }, select: TemplateGuildProjection });
    const template = await util_1.OrmUtils.mergeDeep(new util_1.Template(), { code, serialized_source_guild: guild }).save();
    res.json(template);
});
router.patch("/:code", (0, api_1.route)({ body: "TemplateModifySchema", permission: "MANAGE_GUILD" }), async (req, res) => {
    const { code, guild_id } = req.params;
    const { name, description } = req.body;
    const template = await util_1.OrmUtils.mergeDeep(new util_1.Template(), {
        code,
        name: name,
        description: description,
        source_guild_id: guild_id
    }).save();
    res.json(template);
});
exports.default = router;
//# sourceMappingURL=templates.js.map