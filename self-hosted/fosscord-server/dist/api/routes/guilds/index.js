"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
//TODO: create default channel
router.post("/", (0, api_1.route)({ body: "GuildCreateSchema", right: "CREATE_GUILDS" }), async (req, res) => {
    const body = req.body;
    const { maxGuilds } = util_1.Config.get().limits.user;
    const guild_count = await util_1.Member.count({ where: { id: req.user_id } });
    const rights = await (0, util_1.getRights)(req.user_id);
    if (guild_count >= maxGuilds && !rights.has("MANAGE_GUILDS")) {
        throw util_1.DiscordApiErrors.MAXIMUM_GUILDS.withParams(maxGuilds);
    }
    const guild = await util_1.Guild.createGuild({ ...body, owner_id: req.user_id });
    const { autoJoin } = util_1.Config.get().guild;
    if (autoJoin.enabled && !autoJoin.guilds?.length) {
        // @ts-ignore
        await util_1.Config.set({ guild: { autoJoin: { guilds: [guild.id] } } });
    }
    await util_1.Member.addToGuild(req.user_id, guild.id);
    res.status(201).json({ id: guild.id });
});
exports.default = router;
//# sourceMappingURL=index.js.map