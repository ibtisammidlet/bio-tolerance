"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPresenceUpdate = void 0;
const util_1 = require("#util");
const instanceOf_1 = require("./instanceOf");
async function onPresenceUpdate({ d }) {
    instanceOf_1.check.call(this, util_1.ActivitySchema, d);
    const presence = d;
    await util_1.Session.update({ session_id: this.session_id }, { status: presence.status, activities: presence.activities });
    await (0, util_1.emitEvent)({
        event: "PRESENCE_UPDATE",
        user_id: this.user_id,
        data: {
            user: await util_1.User.getPublicUser(this.user_id),
            activities: presence.activities,
            client_status: {},
            status: presence.status
        }
    });
}
exports.onPresenceUpdate = onPresenceUpdate;
//# sourceMappingURL=PresenceUpdate.js.map