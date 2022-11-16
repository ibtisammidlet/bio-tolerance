"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    //TODO
    res.json([
        {
            id: "",
            name: "",
            interval: 1,
            interval_count: 1,
            tax_inclusive: true,
            sku_id: "",
            fallback_price: 499,
            fallback_currency: "eur",
            currency: "eur",
            price: 4199,
            price_tier: null
        }
    ]).status(200);
});
exports.default = router;
//# sourceMappingURL=subscription-plans.js.map