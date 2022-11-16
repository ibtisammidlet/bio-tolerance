"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("#util");
const express_1 = require("express");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get("/categories", (0, __1.route)({}), async (req, res) => {
    // TODO:
    // Get locale instead
    const { locale, primary_only } = req.query;
    const out = primary_only ? await util_1.Categories.find() : await util_1.Categories.find({ where: { is_primary: true } });
    res.send(out);
});
exports.default = router;
//# sourceMappingURL=discovery.js.map