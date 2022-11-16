"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeartbeat = void 0;
const Constants_1 = require("./Constants");
// TODO: make heartbeat timeout configurable
function setHeartbeat(socket) {
    if (socket.heartbeatTimeout)
        clearTimeout(socket.heartbeatTimeout);
    socket.heartbeatTimeout = setTimeout(() => {
        return socket.close(Constants_1.CLOSECODES.Session_timed_out);
    }, 1000 * 45);
}
exports.setHeartbeat = setHeartbeat;
//# sourceMappingURL=Heartbeat.js.map