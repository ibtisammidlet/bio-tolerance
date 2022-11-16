"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get("/", (0, __1.route)({}), async (req, res) => {
    const { limit, personalization_disabled } = req.query;
    let showAllGuilds = util_1.Config.get().guild.discovery.showAllGuilds;
    // ! this only works using SQL querys
    // TODO: implement this with default typeorm query
    // const guilds = await Guild.find({ where: { features: "DISCOVERABLE" } }); //, take: Math.abs(Number(limit)) });
    const genLoadId = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
    const guilds = showAllGuilds
        ? await util_1.Guild.find({ take: Math.abs(Number(limit || 24)) })
        : await util_1.Guild.find({ where: { features: (0, typeorm_1.Like)("%DISCOVERABLE%") }, take: Math.abs(Number(limit || 24)) });
    res.send({ recommended_guilds: guilds, load_id: `server_recs/${genLoadId(32)}` }).status(200);
});
exports.default = router;
//# sourceMappingURL=guild-recommendations.js.map