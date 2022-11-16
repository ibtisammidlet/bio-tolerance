"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "MessageAcknowledgeSchema" }), async (req, res) => {
    const { channel_id, message_id } = req.params;
    const permission = await (0, util_1.getPermission)(req.user_id, undefined, channel_id);
    permission.hasThrow("VIEW_CHANNEL");
    let read_state = await util_1.ReadState.findOne({ where: { user_id: req.user_id, channel_id } });
    if (!read_state)
        read_state = util_1.OrmUtils.mergeDeep(new util_1.ReadState(), { user_id: req.user_id, channel_id });
    read_state.last_message_id = message_id;
    await read_state.save();
    await (0, util_1.emitEvent)({
        event: "MESSAGE_ACK",
        user_id: req.user_id,
        data: {
            channel_id,
            message_id,
            version: 3763
        }
    });
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=ack.js.map