"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), (req, res) => {
    // TODO:
    //const { exclude_consumed } = req.query;
    res.status(200).send([]);
});
exports.default = router;
//# sourceMappingURL=entitlements.js.map