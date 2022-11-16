"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get("/", (0, __1.route)({}), (req, res) => {
    // TODO:
    res.send({ fingerprint: "", assignments: [], guild_experiments: [] });
});
exports.default = router;
//# sourceMappingURL=experiments.js.map