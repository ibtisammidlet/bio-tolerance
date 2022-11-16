"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const tslib_1 = require("tslib");
const opcodes_1 = tslib_1.__importDefault(require("../opcodes"));
const instanceOf_1 = require("../opcodes/instanceOf");
const Constants_1 = require("../util/Constants");
let erlpack;
try {
    erlpack = require("@yukikaze-bot/erlpack");
}
catch (error) { }
const PayloadSchema = {
    op: Number,
    $d: Object || Number,
    $s: Number,
    $t: String
};
async function Message(buffer) {
    // TODO: compression
    let data;
    if (this.encoding === "etf" && buffer instanceof Buffer)
        data = erlpack.unpack(buffer);
    else if (this.encoding === "json")
        data = JSON.parse(buffer); //TODO: is this even correct?? seems to work for web clients...
    else if (/--debug|--inspect/.test(process.execArgv.join(" "))) {
        debugger;
        return;
    }
    else {
        console.log("Invalid gateway connection! Use a debugger to inspect!");
        return;
    }
    if (process.env.WS_VERBOSE)
        console.log(`[Websocket] Incomming message: ${JSON.stringify(data)}`);
    if (data.op !== 1)
        instanceOf_1.check.call(this, PayloadSchema, data);
    else {
        //custom validation for numbers, because heartbeat
        if (data.s || data.t || (typeof data.d !== "number" && data.d)) {
            console.log("Invalid heartbeat...");
            this.close(Constants_1.CLOSECODES.Decode_error);
        }
    }
    // @ts-ignore
    const OPCodeHandler = opcodes_1.default[data.op];
    if (!OPCodeHandler) {
        console.error("[Gateway] Unkown opcode " + data.op);
        // TODO: if all opcodes are implemented comment this out:
        // this.close(CLOSECODES.Unknown_opcode);
        return;
    }
    try {
        return await OPCodeHandler.call(this, data);
    }
    catch (error) {
        console.error(error);
        if (!this.CLOSED && this.CLOSING)
            return this.close(Constants_1.CLOSECODES.Unknown_error);
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map