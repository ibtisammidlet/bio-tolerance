"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    //TODO
    //Note: It's most likely related to legal. At the moment Discord hasn't finished this too
    const country_code = (await (0, util_1.IPAnalysis)((0, util_1.getIpAdress)(req))).country_code;
    res.json({ consent_required: false, country_code: country_code, promotional_email_opt_in: { required: true, pre_checked: false } });
});
exports.default = router;
//# sourceMappingURL=location-metadata.js.map