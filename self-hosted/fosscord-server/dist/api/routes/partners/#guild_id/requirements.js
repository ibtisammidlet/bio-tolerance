"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    // TODO:
    // Load from database
    // Admin control, but for now it allows anyone to be discoverable
    res.send({
        guild_id: guild_id,
        safe_environment: true,
        healthy: true,
        health_score_pending: false,
        size: true,
        nsfw_properties: {},
        protected: true,
        sufficient: true,
        sufficient_without_grace_period: true,
        valid_rules_channel: true,
        retention_healthy: true,
        engagement_healthy: true,
        age: true,
        minimum_age: 0,
        health_score: {
            avg_nonnew_participators: 0,
            avg_nonnew_communicators: 0,
            num_intentful_joiners: 0,
            perc_ret_w1_intentful: 0
        },
        minimum_size: 0
    });
});
exports.default = router;
//# sourceMappingURL=requirements.js.map