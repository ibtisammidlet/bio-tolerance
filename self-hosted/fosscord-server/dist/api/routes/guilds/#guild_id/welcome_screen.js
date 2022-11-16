"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const guild_id = req.params.guild_id;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    res.json(guild.welcome_screen);
});
router.patch("/", (0, api_1.route)({ body: "GuildUpdateWelcomeScreenSchema", permission: "MANAGE_GUILD" }), async (req, res) => {
    const guild_id = req.params.guild_id;
    const body = req.body;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    if (!guild.welcome_screen.enabled)
        throw new util_1.HTTPError("Welcome screen disabled", 400);
    if (body.welcome_channels)
        guild.welcome_screen.welcome_channels = body.welcome_channels; // TODO: check if they exist and are valid
    if (body.description)
        guild.welcome_screen.description = body.description;
    if (body.enabled != null)
        guild.welcome_screen.enabled = body.enabled;
    await guild.save();
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=welcome_screen.js.map