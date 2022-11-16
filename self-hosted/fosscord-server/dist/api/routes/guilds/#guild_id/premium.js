"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/subscriptions", (0, api_1.route)({}), async (req, res) => {
    // TODO:
    res.json([]);
});
exports.default = router;
//# sourceMappingURL=premium.js.map