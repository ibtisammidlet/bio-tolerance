"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const recipients = await util_1.Recipient.find({
        where: { user_id: req.user_id, closed: false },
        relations: ["channel", "channel.recipients"]
    });
    res.json(await Promise.all(recipients.map((r) => util_1.DmChannelDTO.from(r.channel, [req.user_id]))));
});
router.post("/", (0, api_1.route)({ body: "DmChannelCreateSchema" }), async (req, res) => {
    const body = req.body;
    res.json(await util_1.Channel.createDMChannel(body.recipients, req.user_id, body.name));
});
exports.default = router;
//# sourceMappingURL=channels.js.map