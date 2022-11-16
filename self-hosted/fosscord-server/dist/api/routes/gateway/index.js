"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
const options = {
    test: {
        response: {
            body: "GatewayResponse"
        }
    }
};
router.get("/", (0, api_1.route)(options), (req, res) => {
    const { endpointPublic } = util_1.Config.get().gateway;
    res.json({ url: endpointPublic || process.env.GATEWAY || "ws://localhost:3002" });
});
exports.default = router;
//# sourceMappingURL=index.js.map