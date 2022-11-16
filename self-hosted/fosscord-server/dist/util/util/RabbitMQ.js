"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQ = void 0;
// import Config from "./Config";
exports.RabbitMQ = {
    connection: null,
    channel: null,
    init: async function () {
        return;
        // const host = Config.get().rabbitmq.host;
        // if (!host) return;
        // console.log(`[RabbitMQ] connect: ${host}`);
        // this.connection = await amqp.connect(host, {
        // 	timeout: 1000 * 60,
        // });
        // console.log(`[RabbitMQ] connected`);
        // this.channel = await this.connection.createChannel();
        // console.log(`[RabbitMQ] channel created`);
    }
};
//# sourceMappingURL=RabbitMQ.js.map