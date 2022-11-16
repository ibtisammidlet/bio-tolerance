"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigValue = void 0;
const _1 = require(".");
class ConfigValue {
    gateway = {
        endpointPublic: '${location.protocol === "https:" ? "wss://" : "ws://"}${location.host}',
        endpointPrivate: `ws://localhost:3001`
    };
    cdn = {
        endpointPublic: "${location.host}",
        endpointPrivate: `http://localhost:3001`
    };
    api = new _1.ApiConfiguration();
    general = new _1.GeneralConfiguration();
    limits = new _1.LimitsConfiguration();
    security = new _1.SecurityConfiguration();
    login = new _1.LoginConfiguration();
    register = new _1.RegisterConfiguration();
    regions = new _1.RegionConfiguration();
    guild = new _1.GuildConfiguration();
    gif = new _1.GifConfiguration();
    rabbitmq = new _1.RabbitMQConfiguration();
    kafka = new _1.KafkaConfiguration();
    templates = new _1.TemplateConfiguration();
    client = new _1.ClientConfiguration();
    metrics = new _1.MetricsConfiguration();
    sentry = new _1.SentryConfiguration();
    defaults = new _1.DefaultsConfiguration();
}
exports.ConfigValue = ConfigValue;
//# sourceMappingURL=Config.js.map