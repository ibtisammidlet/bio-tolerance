"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { cdn, gateway } = util_1.Config.get();
    const IdentityForm = {
        cdn: cdn.endpointPublic || process.env.CDN || "http://localhost:3001",
        gateway: gateway.endpointPublic || process.env.GATEWAY || "ws://localhost:3002"
    };
    res.json(IdentityForm);
});
exports.default = router;
//# sourceMappingURL=domains.js.map