"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    res.json(await (0, api_1.getVoiceRegions)((0, util_1.getIpAdress)(req), true)); //vip true?
});
exports.default = router;
//# sourceMappingURL=regions.js.map