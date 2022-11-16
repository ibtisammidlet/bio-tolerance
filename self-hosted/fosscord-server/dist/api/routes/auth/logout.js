"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.post("/", (0, api_1.route)({}), async (req, res) => {
    if (req.body.provider != null || req.body.voip_provider != null) {
        console.log(`[LOGOUT]: provider or voip provider not null!`, req.body);
    }
    else {
        delete req.body.provider;
        delete req.body.voip_provider;
        if (Object.keys(req.body).length != 0)
            console.log(`[LOGOUT]: Extra fields sent in logout!`, req.body);
    }
    res.status(204).send();
});
//# sourceMappingURL=logout.js.map