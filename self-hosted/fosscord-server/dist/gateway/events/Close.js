"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Close = void 0;
const util_1 = require("#util");
async function Close(code, reason) {
    console.log("[WebSocket] closed", code, reason);
    if (this.heartbeatTimeout)
        clearTimeout(this.heartbeatTimeout);
    if (this.readyTimeout)
        clearTimeout(this.readyTimeout);
    this.deflate?.close();
    this.removeAllListeners();
    if (this.session_id) {
        await util_1.Session.delete({ session_id: this.session_id });
        const sessions = await util_1.Session.find({
            where: { user_id: this.user_id },
            select: util_1.PrivateSessionProjection
        });
        await (0, util_1.emitEvent)({
            event: "SESSIONS_REPLACE",
            user_id: this.user_id,
            data: sessions
        });
        const session = sessions.first() || {
            activities: [],
            client_info: {},
            status: "offline"
        };
        await (0, util_1.emitEvent)({
            event: "PRESENCE_UPDATE",
            user_id: this.user_id,
            data: {
                user: await util_1.User.getPublicUser(this.user_id),
                activities: session.activities,
                client_status: session?.client_info,
                status: session.status
            }
        });
    }
}
exports.Close = Close;
//# sourceMappingURL=Close.js.map