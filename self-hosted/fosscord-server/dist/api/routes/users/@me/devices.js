"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({}), (req, res) => {
    // TODO:
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=devices.js.map