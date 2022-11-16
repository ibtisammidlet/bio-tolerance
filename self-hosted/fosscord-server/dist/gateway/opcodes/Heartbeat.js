"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHeartbeat = void 0;
const Heartbeat_1 = require("../util/Heartbeat");
const Send_1 = require("../util/Send");
async function onHeartbeat(_data) {
    // TODO: validate payload
    (0, Heartbeat_1.setHeartbeat)(this);
    await (0, Send_1.Send)(this, { op: 11 });
}
exports.onHeartbeat = onHeartbeat;
//# sourceMappingURL=Heartbeat.js.map