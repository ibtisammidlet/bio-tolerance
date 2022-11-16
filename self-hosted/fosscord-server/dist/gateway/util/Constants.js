"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOSECODES = exports.OPCODES = void 0;
var OPCODES;
(function (OPCODES) {
    OPCODES[OPCODES["Dispatch"] = 0] = "Dispatch";
    OPCODES[OPCODES["Heartbeat"] = 1] = "Heartbeat";
    OPCODES[OPCODES["Identify"] = 2] = "Identify";
    OPCODES[OPCODES["Presence_Update"] = 3] = "Presence_Update";
    OPCODES[OPCODES["Voice_State_Update"] = 4] = "Voice_State_Update";
    OPCODES[OPCODES["Voice_Server_Ping"] = 5] = "Voice_Server_Ping";
    OPCODES[OPCODES["Resume"] = 6] = "Resume";
    OPCODES[OPCODES["Reconnect"] = 7] = "Reconnect";
    OPCODES[OPCODES["Request_Guild_Members"] = 8] = "Request_Guild_Members";
    OPCODES[OPCODES["Invalid_Session"] = 9] = "Invalid_Session";
    OPCODES[OPCODES["Hello"] = 10] = "Hello";
    OPCODES[OPCODES["Heartbeat_ACK"] = 11] = "Heartbeat_ACK";
    OPCODES[OPCODES["Guild_Sync"] = 12] = "Guild_Sync";
    OPCODES[OPCODES["DM_Update"] = 13] = "DM_Update";
    OPCODES[OPCODES["Lazy_Request"] = 14] = "Lazy_Request";
    OPCODES[OPCODES["Lobby_Connect"] = 15] = "Lobby_Connect";
    OPCODES[OPCODES["Lobby_Disconnect"] = 16] = "Lobby_Disconnect";
    OPCODES[OPCODES["Lobby_Voice_States_Update"] = 17] = "Lobby_Voice_States_Update";
    OPCODES[OPCODES["Stream_Create"] = 18] = "Stream_Create";
    OPCODES[OPCODES["Stream_Delete"] = 19] = "Stream_Delete";
    OPCODES[OPCODES["Stream_Watch"] = 20] = "Stream_Watch";
    OPCODES[OPCODES["Stream_Ping"] = 21] = "Stream_Ping";
    OPCODES[OPCODES["Stream_Set_Paused"] = 22] = "Stream_Set_Paused";
    OPCODES[OPCODES["Request_Application_Commands"] = 24] = "Request_Application_Commands";
})(OPCODES = exports.OPCODES || (exports.OPCODES = {}));
var CLOSECODES;
(function (CLOSECODES) {
    CLOSECODES[CLOSECODES["Unknown_error"] = 4000] = "Unknown_error";
    CLOSECODES[CLOSECODES["Unknown_opcode"] = 4001] = "Unknown_opcode";
    CLOSECODES[CLOSECODES["Decode_error"] = 4002] = "Decode_error";
    CLOSECODES[CLOSECODES["Not_authenticated"] = 4003] = "Not_authenticated";
    CLOSECODES[CLOSECODES["Authentication_failed"] = 4004] = "Authentication_failed";
    CLOSECODES[CLOSECODES["Already_authenticated"] = 4005] = "Already_authenticated";
    CLOSECODES[CLOSECODES["Invalid_session"] = 4006] = "Invalid_session";
    CLOSECODES[CLOSECODES["Invalid_seq"] = 4007] = "Invalid_seq";
    CLOSECODES[CLOSECODES["Rate_limited"] = 4008] = "Rate_limited";
    CLOSECODES[CLOSECODES["Session_timed_out"] = 4009] = "Session_timed_out";
    CLOSECODES[CLOSECODES["Invalid_shard"] = 4010] = "Invalid_shard";
    CLOSECODES[CLOSECODES["Sharding_required"] = 4011] = "Sharding_required";
    CLOSECODES[CLOSECODES["Invalid_API_version"] = 4012] = "Invalid_API_version";
    CLOSECODES[CLOSECODES["Invalid_intent"] = 4013] = "Invalid_intent";
    CLOSECODES[CLOSECODES["Disallowed_intent"] = 4014] = "Disallowed_intent";
})(CLOSECODES = exports.CLOSECODES || (exports.CLOSECODES = {}));
//# sourceMappingURL=Constants.js.map