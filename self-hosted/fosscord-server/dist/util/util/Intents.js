"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intents = void 0;
const BitField_1 = require("./BitField");
class Intents extends BitField_1.BitField {
    static FLAGS = {
        GUILDS: BigInt(1) << BigInt(0),
        GUILD_MEMBERS: BigInt(1) << BigInt(1),
        GUILD_BANS: BigInt(1) << BigInt(2),
        GUILD_EMOJIS: BigInt(1) << BigInt(3),
        GUILD_INTEGRATIONS: BigInt(1) << BigInt(4),
        GUILD_WEBHOOKS: BigInt(1) << BigInt(5),
        GUILD_INVITES: BigInt(1) << BigInt(6),
        GUILD_VOICE_STATES: BigInt(1) << BigInt(7),
        GUILD_PRESENCES: BigInt(1) << BigInt(8),
        GUILD_MESSAGES_METADATA: BigInt(1) << BigInt(9),
        GUILD_MESSAGE_REACTIONS: BigInt(1) << BigInt(10),
        GUILD_MESSAGE_TYPING: BigInt(1) << BigInt(11),
        DIRECT_MESSAGES: BigInt(1) << BigInt(12),
        DIRECT_MESSAGE_REACTIONS: BigInt(1) << BigInt(13),
        DIRECT_MESSAGE_TYPING: BigInt(1) << BigInt(14),
        GUILD_MESSAGES_CONTENT: BigInt(1) << BigInt(15),
        GUILD_POLICIES: BigInt(1) << BigInt(20),
        GUILD_POLICY_EXECUTION: BigInt(1) << BigInt(21),
        LIVE_MESSAGE_COMPOSITION: BigInt(1) << BigInt(32),
        GUILD_ROUTES: BigInt(1) << BigInt(41),
        DIRECT_MESSAGES_THREADS: BigInt(1) << BigInt(42),
        JUMBO_EVENTS: BigInt(1) << BigInt(43),
        LOBBIES: BigInt(1) << BigInt(44),
        INSTANCE_ROUTES: BigInt(1) << BigInt(60),
        INSTANCE_GUILD_CHANGES: BigInt(1) << BigInt(61),
        INSTANCE_POLICY_UPDATES: BigInt(1) << BigInt(62),
        INSTANCE_USER_UPDATES: BigInt(1) << BigInt(63) // all instance user updates
    };
}
exports.Intents = Intents;
//# sourceMappingURL=Intents.js.map