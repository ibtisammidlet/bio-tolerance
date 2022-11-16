"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Heartbeat_1 = require("./Heartbeat");
const Identify_1 = require("./Identify");
const LazyRequest_1 = require("./LazyRequest");
const PresenceUpdate_1 = require("./PresenceUpdate");
const RequestGuildMembers_1 = require("./RequestGuildMembers");
const Resume_1 = require("./Resume");
const VoiceStateUpdate_1 = require("./VoiceStateUpdate");
exports.default = {
    1: Heartbeat_1.onHeartbeat,
    2: Identify_1.onIdentify,
    3: PresenceUpdate_1.onPresenceUpdate,
    4: VoiceStateUpdate_1.onVoiceStateUpdate,
    // 5: Voice Server Ping
    6: Resume_1.onResume,
    // 7: Reconnect: You should attempt to reconnect and resume immediately.
    8: RequestGuildMembers_1.onRequestGuildMembers,
    // 9: Invalid Session
    // 10: Hello
    // 13: Dm_update
    14: LazyRequest_1.onLazyRequest
};
//# sourceMappingURL=index.js.map