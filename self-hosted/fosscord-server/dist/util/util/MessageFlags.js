"use strict";
// based on https://github.com/discordjs/discord.js/blob/master/src/util/MessageFlags.js
// Apache License Version 2.0 Copyright 2015 - 2021 Amish Shah, 2022 Erkin Alp Güney
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFlags = void 0;
const BitField_1 = require("./BitField");
class MessageFlags extends BitField_1.BitField {
    static FLAGS = {
        CROSSPOSTED: BigInt(1) << BigInt(0),
        IS_CROSSPOST: BigInt(1) << BigInt(1),
        SUPPRESS_EMBEDS: BigInt(1) << BigInt(2),
        // SOURCE_MESSAGE_DELETED: BigInt(1) << BigInt(3), // fosscord will delete them from destination too, making this redundant
        URGENT: BigInt(1) << BigInt(4),
        // HAS_THREAD: BigInt(1) << BigInt(5) // does not apply to fosscord due to infrastructural differences
        PRIVATE_ROUTE: BigInt(1) << BigInt(6),
        INTERACTION_WAIT: BigInt(1) << BigInt(7),
        // FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: BigInt(1) << BigInt(8)
        SCRIPT_WAIT: BigInt(1) << BigInt(24),
        IMPORT_WAIT: BigInt(1) << BigInt(25) // latest message of a bulk import, waiting for the rest of the channel to be backfilled
    };
}
exports.MessageFlags = MessageFlags;
//# sourceMappingURL=MessageFlags.js.map