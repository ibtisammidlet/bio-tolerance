"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get("/", (0, __1.route)({}), async (req, res) => {
    const { offset, limit, categories } = req.query;
    let showAllGuilds = util_1.Config.get().guild.discovery.showAllGuilds;
    let configLimit = util_1.Config.get().guild.discovery.limit;
    // ! this only works using SQL querys
    // const guilds = await Guild.find({ where: { features: "DISCOVERABLE" } }); //, take: Math.abs(Number(limit)) });
    let guilds;
    if (categories == undefined) {
        guilds = showAllGuilds
            ? await util_1.Guild.find({ take: Math.abs(Number(limit || configLimit)) })
            : await util_1.Guild.find({ where: { features: (0, typeorm_1.Like)("%DISCOVERABLE%") }, take: Math.abs(Number(limit || configLimit)) });
    }
    else {
        guilds = showAllGuilds
            ? await util_1.Guild.find({ where: { primary_category_id: Number(categories) }, take: Math.abs(Number(limit || configLimit)) })
            : await util_1.Guild.find({
                where: { primary_category_id: Number(categories), features: (0, typeorm_1.Like)("%DISCOVERABLE%") },
                take: Math.abs(Number(limit || configLimit))
            });
    }
    const total = guilds ? guilds.length : undefined;
    res.send({
        total: total,
        guilds: guilds,
        offset: Number(offset || util_1.Config.get().guild.discovery.offset),
        limit: Number(limit || configLimit)
    });
});
exports.default = router;
//# sourceMappingURL=discoverable-guilds.js.map