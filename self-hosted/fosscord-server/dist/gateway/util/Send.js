"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Send = void 0;
let erlpack;
try {
    erlpack = require("@yukikaze-bot/erlpack");
}
catch (error) {
    console.log("Missing @yukikaze-bot/erlpack, electron-based desktop clients designed for discord.com will not be able to connect!");
}
async function Send(socket, data) {
    if (process.env.WS_VERBOSE)
        console.log(`[Websocket] Outgoing message: ${JSON.stringify(data)}`);
    let buffer;
    if (socket.encoding === "etf")
        buffer = erlpack.pack(data);
    // TODO: encode circular object
    else if (socket.encoding === "json")
        buffer = JSON.stringify(data);
    else
        return;
    // TODO: compression
    if (socket.deflate) {
        socket.deflate.write(buffer);
        socket.deflate.flush();
        return;
    }
    return new Promise((res, rej) => {
        if (socket.readyState !== 1) {
            return rej("socket not open");
        }
        socket.send(buffer, (err) => {
            if (err)
                return rej(err);
            return res(null);
        });
    });
}
exports.Send = Send;
//# sourceMappingURL=Send.js.map