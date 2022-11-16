"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { client } = util_1.Config.get();
    const release = await util_1.Release.findOneOrFail({ where: { name: client.releases.upstreamVersion } });
    res.json({
        name: release.name,
        pub_date: release.pub_date,
        url: release.url,
        notes: release.notes
    });
});
exports.default = router;
//# sourceMappingURL=updates.js.map