"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmChannelDTO = void 0;
const entities_1 = require("../entities");
const UserDTO_1 = require("./UserDTO");
class DmChannelDTO {
    icon;
    id;
    last_message_id;
    name;
    origin_channel_id;
    owner_id;
    recipients;
    type;
    static async from(channel, excluded_recipients = [], origin_channel_id) {
        const obj = new DmChannelDTO();
        obj.icon = channel.icon || null;
        obj.id = channel.id;
        obj.last_message_id = channel.last_message_id || null;
        obj.name = channel.name || null;
        obj.origin_channel_id = origin_channel_id || null;
        obj.owner_id = channel.owner_id;
        obj.type = channel.type;
        obj.recipients = (await Promise.all(channel
            .recipients.filter((r) => !excluded_recipients.includes(r.user_id))
            .map(async (r) => {
            return await entities_1.User.findOneOrFail({ where: { id: r.user_id }, select: entities_1.PublicUserProjection });
        }))).map((u) => new UserDTO_1.MinimalPublicUserDTO(u));
        return obj;
    }
    excludedRecipients(excluded_recipients) {
        return {
            ...this,
            recipients: this.recipients.filter((r) => !excluded_recipients.includes(r.id))
        };
    }
}
exports.DmChannelDTO = DmChannelDTO;
//# sourceMappingURL=DmChannelDTO.js.map