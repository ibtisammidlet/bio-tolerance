"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRights = exports.Rights = void 0;
const __1 = require("..");
const entities_1 = require("../entities");
const BitField_1 = require("./BitField");
// TODO: just like roles for members, users should have privilidges which combine multiple rights into one and make it easy to assign
class Rights extends BitField_1.BitField {
    constructor(bits = 0) {
        super(bits);
        if (this.bitfield & Rights.FLAGS.OPERATOR) {
            this.bitfield = ALL_RIGHTS;
        }
    }
    static FLAGS = {
        OPERATOR: (0, BitField_1.BitFlag)(0),
        MANAGE_APPLICATIONS: (0, BitField_1.BitFlag)(1),
        MANAGE_GUILDS: (0, BitField_1.BitFlag)(2),
        MANAGE_MESSAGES: (0, BitField_1.BitFlag)(3),
        MANAGE_RATE_LIMITS: (0, BitField_1.BitFlag)(4),
        MANAGE_ROUTING: (0, BitField_1.BitFlag)(5),
        MANAGE_TICKETS: (0, BitField_1.BitFlag)(6),
        MANAGE_USERS: (0, BitField_1.BitFlag)(7),
        ADD_MEMBERS: (0, BitField_1.BitFlag)(8),
        BYPASS_RATE_LIMITS: (0, BitField_1.BitFlag)(9),
        CREATE_APPLICATIONS: (0, BitField_1.BitFlag)(10),
        CREATE_CHANNELS: (0, BitField_1.BitFlag)(11),
        CREATE_DMS: (0, BitField_1.BitFlag)(12),
        CREATE_DM_GROUPS: (0, BitField_1.BitFlag)(13),
        CREATE_GUILDS: (0, BitField_1.BitFlag)(14),
        CREATE_INVITES: (0, BitField_1.BitFlag)(15),
        CREATE_ROLES: (0, BitField_1.BitFlag)(16),
        CREATE_TEMPLATES: (0, BitField_1.BitFlag)(17),
        CREATE_WEBHOOKS: (0, BitField_1.BitFlag)(18),
        JOIN_GUILDS: (0, BitField_1.BitFlag)(19),
        PIN_MESSAGES: (0, BitField_1.BitFlag)(20),
        SELF_ADD_REACTIONS: (0, BitField_1.BitFlag)(21),
        SELF_DELETE_MESSAGES: (0, BitField_1.BitFlag)(22),
        SELF_EDIT_MESSAGES: (0, BitField_1.BitFlag)(23),
        SELF_EDIT_NAME: (0, BitField_1.BitFlag)(24),
        SEND_MESSAGES: (0, BitField_1.BitFlag)(25),
        USE_ACTIVITIES: (0, BitField_1.BitFlag)(26),
        USE_VIDEO: (0, BitField_1.BitFlag)(27),
        USE_VOICE: (0, BitField_1.BitFlag)(28),
        INVITE_USERS: (0, BitField_1.BitFlag)(29),
        SELF_DELETE_DISABLE: (0, BitField_1.BitFlag)(30),
        DEBTABLE: (0, BitField_1.BitFlag)(31),
        CREDITABLE: (0, BitField_1.BitFlag)(32),
        KICK_BAN_MEMBERS: (0, BitField_1.BitFlag)(33),
        // can kick or ban guild or group DM members in the guilds/groups that they have KICK_MEMBERS, or BAN_MEMBERS
        SELF_LEAVE_GROUPS: (0, BitField_1.BitFlag)(34),
        // can leave the guilds or group DMs that they joined on their own (one can always leave a guild or group DMs they have been force-added)
        PRESENCE: (0, BitField_1.BitFlag)(35),
        // inverts the presence confidentiality default (OPERATOR's presence is not routed by default, others' are) for a given user
        SELF_ADD_DISCOVERABLE: (0, BitField_1.BitFlag)(36),
        MANAGE_GUILD_DIRECTORY: (0, BitField_1.BitFlag)(37),
        POGGERS: (0, BitField_1.BitFlag)(38),
        USE_ACHIEVEMENTS: (0, BitField_1.BitFlag)(39),
        INITIATE_INTERACTIONS: (0, BitField_1.BitFlag)(40),
        RESPOND_TO_INTERACTIONS: (0, BitField_1.BitFlag)(41),
        SEND_BACKDATED_EVENTS: (0, BitField_1.BitFlag)(42),
        USE_MASS_INVITES: (0, BitField_1.BitFlag)(43),
        ACCEPT_INVITES: (0, BitField_1.BitFlag)(44),
        SELF_EDIT_FLAGS: (0, BitField_1.BitFlag)(45),
        EDIT_FLAGS: (0, BitField_1.BitFlag)(46),
        MANAGE_GROUPS: (0, BitField_1.BitFlag)(47),
        VIEW_SERVER_STATS: (0, BitField_1.BitFlag)(48) // added per @chrischrome's request — can view server stats)
    };
    any(permission, checkOperator = true) {
        return (checkOperator && super.any(Rights.FLAGS.OPERATOR)) || super.any(permission);
    }
    has(permission, checkOperator = true) {
        return (checkOperator && super.has(Rights.FLAGS.OPERATOR)) || super.has(permission);
    }
    hasThrow(permission) {
        if (this.has(permission))
            return true;
        // @ts-ignore
        throw new __1.HTTPError(`You are missing the following rights ${permission}`, 403);
    }
}
exports.Rights = Rights;
const ALL_RIGHTS = Object.values(Rights.FLAGS).reduce((total, val) => total | val, BigInt(0));
async function getRights(user_id
/**, opts: {
    in_behalf?: (keyof User)[];
} = {} **/
) {
    let user = await entities_1.User.findOneOrFail({ where: { id: user_id } });
    return new Rights(user.rights);
}
exports.getRights = getRights;
//# sourceMappingURL=Rights.js.map