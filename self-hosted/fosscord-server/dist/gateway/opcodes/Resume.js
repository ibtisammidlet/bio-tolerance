"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onResume = void 0;
const Send_1 = require("../util/Send");
async function onResume(data) {
    console.log("Got Resume -> cancel not implemented");
    await (0, Send_1.Send)(this, {
        op: 9,
        d: false
    });
    // return this.close(CLOSECODES.Invalid_session);
}
exports.onResume = onResume;
//# sourceMappingURL=Resume.js.map