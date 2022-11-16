"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("#util");
const express_1 = require("express");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get("/:branch", (0, __1.route)({}), async (req, res) => {
    const { client } = util_1.Config.get();
    const { branch } = req.params;
    const { platform } = req.query;
    //TODO
    if (!platform || !["linux", "osx", "win"].includes(platform.toString()))
        return res.status(404);
    const release = await util_1.Release.findOneOrFail({ where: { name: client.releases.upstreamVersion } });
    res.redirect(release[`win_url`]);
});
exports.default = router;
//# sourceMappingURL=downloads.js.map