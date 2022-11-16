"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const router = (0, express_1.Router)();
router.get("/:code", (0, api_1.route)({}), async (req, res) => {
    const { allowDiscordTemplates, allowRaws, enabled } = util_1.Config.get().templates;
    if (!enabled)
        res.json({ code: 403, message: "Template creation & usage is disabled on this instance." }).sendStatus(403);
    const { code } = req.params;
    if (code.startsWith("discord:")) {
        if (!allowDiscordTemplates)
            return res.json({ code: 403, message: "Discord templates cannot be used on this instance." }).sendStatus(403);
        const discordTemplateID = code.split("discord:", 2)[1];
        const discordTemplateData = await (0, node_fetch_1.default)(`https://discord.com/api/v9/guilds/templates/${discordTemplateID}`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        });
        return res.json(await discordTemplateData.json());
    }
    if (code.startsWith("external:")) {
        if (!allowRaws)
            return res.json({ code: 403, message: "Importing raws is disabled on this instance." }).sendStatus(403);
        return res.json(code.split("external:", 2)[1]);
    }
    const template = await util_1.Template.findOneOrFail({ where: { code } });
    res.json(template);
});
router.post("/:code", (0, api_1.route)({ body: "GuildTemplateCreateSchema" }), async (req, res) => {
    const { enabled, allowTemplateCreation, allowDiscordTemplates, allowRaws } = util_1.Config.get().templates;
    if (!enabled)
        return res.json({ code: 403, message: "Template creation & usage is disabled on this instance." }).sendStatus(403);
    if (!allowTemplateCreation)
        return res.json({ code: 403, message: "Template creation is disabled on this instance." }).sendStatus(403);
    const { code } = req.params;
    const body = req.body;
    const { maxGuilds } = util_1.Config.get().limits.user;
    const guild_count = await util_1.Member.count({ where: { id: req.user_id } });
    if (guild_count >= maxGuilds) {
        throw util_1.DiscordApiErrors.MAXIMUM_GUILDS.withParams(maxGuilds);
    }
    const template = await util_1.Template.findOneOrFail({ where: { code } });
    const guild_id = util_1.Snowflake.generate();
    const [guild, role] = await Promise.all([
        util_1.OrmUtils.mergeDeep(new util_1.Guild(), {
            ...body,
            ...template.serialized_source_guild,
            id: guild_id,
            owner_id: req.user_id
        }).save(),
        util_1.OrmUtils.mergeDeep(new util_1.Role(), {
            id: guild_id,
            guild_id: guild_id,
            color: 0,
            hoist: false,
            managed: true,
            mentionable: true,
            name: "@everyone",
            permissions: BigInt("2251804225"),
            position: 0,
            tags: null
        }).save()
    ]);
    await util_1.Member.addToGuild(req.user_id, guild_id);
    res.status(201).json({ id: guild.id });
});
exports.default = router;
//# sourceMappingURL=index.js.map