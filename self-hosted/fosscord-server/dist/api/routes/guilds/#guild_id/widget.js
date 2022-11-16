"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
// https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    return res.json({ enabled: guild.widget_enabled || false, channel_id: guild.widget_channel_id || null });
});
// https://discord.com/developers/docs/resources/guild#modify-guild-widget
router.patch("/", (0, api_1.route)({ body: "WidgetModifySchema", permission: "MANAGE_GUILD" }), async (req, res) => {
    const body = req.body;
    const { guild_id } = req.params;
    await util_1.Guild.update({ id: guild_id }, { widget_enabled: body.enabled, widget_channel_id: body.channel_id });
    // Widget invite for the widget_channel_id gets created as part of the /guilds/{guild.id}/widget.json request
    return res.json(body);
});
exports.default = router;
//# sourceMappingURL=widget.js.map