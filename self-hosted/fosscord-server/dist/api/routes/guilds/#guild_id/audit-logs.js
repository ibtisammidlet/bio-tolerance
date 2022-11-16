"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
//TODO: implement audit logs
router.get("/", (0, api_1.route)({}), async (req, res) => {
    res.json({
        audit_log_entries: [],
        users: [],
        integrations: [],
        webhooks: [],
        guild_scheduled_events: [],
        threads: [],
        application_commands: []
    });
});
exports.default = router;
//# sourceMappingURL=audit-logs.js.map