"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ permission: "MANAGE_MESSAGES" }), (req, res) => {
    // TODO:
    res.json({
        id: "",
        type: 0,
        content: "",
        channel_id: "",
        author: { id: "", username: "", avatar: "", discriminator: "", public_flags: 64 },
        attachments: [],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "",
        edited_timestamp: null,
        flags: 1,
        components: []
    }).status(200);
});
exports.default = router;
//# sourceMappingURL=crosspost.js.map