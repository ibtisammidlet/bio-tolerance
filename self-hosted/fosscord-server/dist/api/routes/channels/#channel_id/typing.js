"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ permission: "SEND_MESSAGES" }), async (req, res) => {
    const { channel_id } = req.params;
    const user_id = req.user_id;
    const timestamp = Date.now();
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    const member = await util_1.Member.findOne({ where: { id: user_id, guild_id: channel.guild_id }, relations: ["roles", "user"] });
    await (0, util_1.emitEvent)({
        event: "TYPING_START",
        channel_id: channel_id,
        data: {
            ...(member ? { member: { ...member, roles: member?.roles?.map((x) => x.id) } } : null),
            channel_id,
            timestamp,
            user_id,
            guild_id: channel.guild_id
        }
    });
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=typing.js.map