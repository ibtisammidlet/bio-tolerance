"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    // TODO: member verification
    res.status(404).json({
        message: "Unknown Guild Member Verification Form",
        code: 10068
    });
});
exports.default = router;
//# sourceMappingURL=member-verification.js.map