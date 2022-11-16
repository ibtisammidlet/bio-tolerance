"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), (req, res) => {
    // TODO:
    res.status(200).send({ user_affinities: [], inverse_user_affinities: [] });
});
exports.default = router;
//# sourceMappingURL=users.js.map