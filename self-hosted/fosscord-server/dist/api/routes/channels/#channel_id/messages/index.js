"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextChannel = void 0;
const tslib_1 = require("tslib");
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const multer_1 = tslib_1.__importDefault(require("multer"));
const picocolors_1 = require("picocolors");
const typeorm_1 = require("typeorm");
const url_1 = require("url");
const router = (0, express_1.Router)();
exports.default = router;
function isTextChannel(type) {
    switch (type) {
        case util_1.ChannelType.GUILD_STORE:
        case util_1.ChannelType.GUILD_VOICE:
        case util_1.ChannelType.GUILD_STAGE_VOICE:
        case util_1.ChannelType.GUILD_CATEGORY:
        case util_1.ChannelType.GUILD_FORUM:
        case util_1.ChannelType.DIRECTORY:
            throw new util_1.HTTPError("not a text channel", 400);
        case util_1.ChannelType.DM:
        case util_1.ChannelType.GROUP_DM:
        case util_1.ChannelType.GUILD_NEWS:
        case util_1.ChannelType.GUILD_NEWS_THREAD:
        case util_1.ChannelType.GUILD_PUBLIC_THREAD:
        case util_1.ChannelType.GUILD_PRIVATE_THREAD:
        case util_1.ChannelType.GUILD_TEXT:
        case util_1.ChannelType.ENCRYPTED:
        case util_1.ChannelType.ENCRYPTED_THREAD:
            return true;
        default:
            throw new util_1.HTTPError("unimplemented", 400);
    }
}
exports.isTextChannel = isTextChannel;
// https://discord.com/developers/docs/resources/channel#create-message
// get messages
router.get("/", async (req, res) => {
    const channel_id = req.params.channel_id;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel)
        throw new util_1.HTTPError(req.t("common:notfound.CHANNEL"), 404);
    isTextChannel(channel.type);
    const around = req.query.around ? `${req.query.around}` : undefined;
    const before = req.query.before ? `${req.query.before}` : undefined;
    const after = req.query.after ? `${req.query.after}` : undefined;
    const limit = Number(req.query.limit) || 50;
    if (limit < 1 || limit > 100)
        throw new util_1.HTTPError("limit must be between 1 and 100", 422);
    let halfLimit = Math.floor(limit / 2);
    const permissions = await (0, util_1.getPermission)(req.user_id, channel.guild_id, channel_id);
    permissions.hasThrow("VIEW_CHANNEL");
    if (!permissions.has("READ_MESSAGE_HISTORY"))
        return res.json([]);
    let query = {
        order: { id: "DESC" },
        take: limit,
        where: { channel_id },
        relations: ["author", "webhook", "application", "mentions", "mention_roles", "mention_channels", "sticker_items", "attachments"]
    };
    if (after) {
        if (after > new util_1.Snowflake())
            return res.status(422);
        query.where.id = (0, typeorm_1.MoreThan)(after);
    }
    else if (before) {
        if (before < req.params.channel_id)
            return res.status(422);
        query.where.id = (0, typeorm_1.LessThan)(before);
    }
    else if (around) {
        query.where.id = [
            (0, typeorm_1.MoreThan)((BigInt(around) - BigInt(halfLimit)).toString()),
            (0, typeorm_1.LessThan)((BigInt(around) + BigInt(halfLimit)).toString())
        ];
    }
    const messages = await util_1.Message.find(query);
    const endpoint = util_1.Config.get().cdn.endpointPublic;
    return res.json(messages.map((x) => {
        (x.reactions || []).forEach((x) => {
            // @ts-ignore
            if ((x.user_ids || []).includes(req.user_id))
                x.me = true;
            // @ts-ignore
            delete x.user_ids;
        });
        // @ts-ignore
        if (!x.author)
            x.author = { id: "4", discriminator: "0000", username: "Fosscord Ghost", public_flags: "0", avatar: null };
        x.attachments?.forEach((y) => {
            // dynamically set attachment proxy_url in case the endpoint changed
            const uri = y.proxy_url.startsWith("http") ? y.proxy_url : `https://example.org${y.proxy_url}`;
            y.proxy_url = `${endpoint == null ? "" : endpoint}${new url_1.URL(uri).pathname}`;
        });
        /**
        Some clients ( discord.js ) only check if a property exists within the response,
        which causes erorrs when, say, the `application` property is `null`.
        **/
        for (let curr in x) {
            if (x[curr] === null)
                delete x[curr];
        }
        return x;
    }));
});
// TODO: config max upload size
const messageUpload = (0, multer_1.default)({
    limits: {
        fileSize: 1024 * 1024 * 100,
        fields: 10
        // files: 1
    },
    storage: multer_1.default.memoryStorage()
}); // max upload 50 mb
/**
 TODO: dynamically change limit of MessageCreateSchema with config

 https://discord.com/developers/docs/resources/channel#create-message
 TODO: text channel slowdown (per-user and across-users)
 Q: trim and replace message content and every embed field A: NO, given this cannot be implemented in E2EE channels
 TODO: only dispatch notifications for mentions denoted in allowed_mentions
**/
// Send message
router.post("/", messageUpload.any(), async (req, res, next) => {
    if (req.body.payload_json) {
        req.body = JSON.parse(req.body.payload_json);
    }
    next();
}, (0, api_1.route)({ body: "MessageCreateSchema", permission: "SEND_MESSAGES", right: "SEND_MESSAGES" }), async (req, res) => {
    const { channel_id } = req.params;
    let body = req.body;
    const attachments = [];
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id }, relations: ["recipients", "recipients.user"] });
    if (!channel.isWritable()) {
        throw new util_1.HTTPError(`Cannot send messages to channel of type ${channel.type}`, 400);
    }
    var limits = util_1.Config.get().limits;
    if (!(await (0, util_1.getRights)(req.user_id)).has(util_1.Rights.FLAGS.BYPASS_RATE_LIMITS) &&
        limits.absoluteRate.sendMessage.enabled &&
        (await util_1.Message.count({
            where: { channel_id, timestamp: (0, typeorm_1.MoreThan)(new Date(Date.now() - limits.absoluteRate.sendMessage.window)) }
        })) >= limits.absoluteRate.sendMessage.limit) {
        console.log((0, picocolors_1.yellow)(`[MESSAGE] Global register rate limit exceeded for ${(0, util_1.getIpAdress)(req)}: ${channel_id}, ${req.user_id}, ${body.content}`));
        let oldest = await util_1.Message.findOne({
            where: { channel_id, timestamp: (0, typeorm_1.MoreThan)(new Date(Date.now() - limits.absoluteRate.sendMessage.window)) },
            order: { timestamp: "ASC" }
        });
        if (!oldest) {
            console.warn((0, picocolors_1.red)(`[MESSAGE/WARN] Global rate limits exceeded, but no oldest message found. This should not happen. Did you misconfigure the limits?`));
        }
        else {
            let retryAfterSec = Math.ceil((oldest.timestamp.getTime() - new Date(Date.now() - limits.absoluteRate.sendMessage.window).getTime()) / 1000);
            return res
                .status(429)
                .set("X-RateLimit-Limit", `${limits.absoluteRate.sendMessage.limit}`)
                .set("X-RateLimit-Remaining", "0")
                .set("X-RateLimit-Reset", `${(oldest.timestamp.getTime() + limits.absoluteRate.sendMessage.window) / 1000}`)
                .set("X-RateLimit-Reset-After", `${retryAfterSec}`)
                .set("X-RateLimit-Global", `false`)
                .set("Retry-After", `${retryAfterSec}`)
                .set("X-RateLimit-Bucket", `chnl_${channel_id}`)
                .send({ message: req.t("common:toomany.MESSAGE"), retry_after: retryAfterSec, global: false });
        }
    }
    const files = req.files ?? [];
    for (let currFile of files) {
        try {
            const file = await (0, util_1.uploadFile)(`/attachments/${channel.id}`, currFile);
            attachments.push({ ...file, proxy_url: file.url });
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
    const embeds = body.embeds || [];
    if (body.embed)
        embeds.push(body.embed);
    let message = await (0, api_1.handleMessage)({
        ...body,
        type: 0,
        pinned: false,
        author_id: req.user_id,
        embeds,
        channel_id,
        attachments,
        edited_timestamp: undefined,
        timestamp: new Date()
    });
    channel.last_message_id = message.id;
    if (channel.isDm()) {
        const channel_dto = await util_1.DmChannelDTO.from(channel);
        // Only one recipients should be closed here, since in group DMs the recipient is deleted not closed
        Promise.all(channel.recipients.map((recipient) => {
            if (recipient.closed) {
                recipient.closed = false;
                return Promise.all([
                    recipient.save(),
                    (0, util_1.emitEvent)({
                        event: "CHANNEL_CREATE",
                        data: channel_dto.excludedRecipients([recipient.user_id]),
                        user_id: recipient.user_id
                    })
                ]);
            }
        }));
    }
    //Defining member fields
    var member = await util_1.Member.findOneOrFail({ where: { id: req.user_id }, relations: ["roles"] });
    // TODO: This doesn't work either
    // member.roles = member.roles.filter((role) => {
    // 	return role.id !== role.guild_id;
    // }).map((role) => {
    // 	return role.id;
    // });
    message.member = member;
    // TODO: Figure this out
    // delete message.member.last_message_id;
    // delete message.member.index;
    await Promise.all([
        message.save(),
        (0, util_1.emitEvent)({ event: "MESSAGE_CREATE", channel_id: channel_id, data: message }),
        message.guild_id ? util_1.Member.update({ id: req.user_id, guild_id: message.guild_id }, { last_message_id: message.id }) : null,
        channel.save()
    ]);
    (0, api_1.postHandleMessage)(message).catch((e) => { }); // no await as it shouldnt block the message send function and silently catch error
    return res.json(message);
});
//# sourceMappingURL=index.js.map