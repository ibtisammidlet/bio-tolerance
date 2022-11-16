"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    //TODO we should use an enum for guild's features and not hardcoded strings
    return res.json(await (0, api_1.getVoiceRegions)((0, util_1.getIpAdress)(req), guild.features.includes("VIP_REGIONS")));
});
exports.default = router;
//# sourceMappingURL=regions.js.map