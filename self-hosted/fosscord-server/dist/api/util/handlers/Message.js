"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.postHandleMessage = exports.handleMessage = void 0;
const tslib_1 = require("tslib");
const util_1 = require("#util");
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const allow_empty = false;
// TODO: check webhook, application, system author, stickers
// TODO: embed gifs/videos/images
const LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
const DEFAULT_FETCH_OPTIONS = {
    redirect: "follow",
    follow: 1,
    headers: {
        "user-agent": "Mozilla/5.0 (compatible; Fosscord/1.0; +https://github.com/fosscord/fosscord)"
    },
    // size: 1024 * 1024 * 5, 	// grabbed from config later
    compress: true,
    method: "GET"
};
async function handleMessage(opts) {
    const channel = await util_1.Channel.findOneOrFail({ where: { id: opts.channel_id }, relations: ["recipients"] });
    if (!channel || !opts.channel_id)
        throw new util_1.HTTPError("Channel not found", 404);
    const message = util_1.OrmUtils.mergeDeep(new util_1.Message(), {
        ...opts,
        sticker_items: opts.sticker_ids?.map((x) => ({ id: x })),
        guild_id: channel.guild_id,
        channel_id: opts.channel_id,
        attachments: opts.attachments || [],
        embeds: opts.embeds || [],
        reactions: /*opts.reactions ||*/ [],
        type: opts.type ?? 0
    });
    if (message.content && message.content.length > util_1.Config.get().limits.message.maxCharacters) {
        throw new util_1.HTTPError("Content length over max character limit");
    }
    if (opts.author_id) {
        message.author = await util_1.User.getPublicUser(opts.author_id);
        const rights = await (0, util_1.getRights)(opts.author_id);
        rights.hasThrow("SEND_MESSAGES");
    }
    if (opts.application_id) {
        message.application = await util_1.Application.findOneOrFail({ where: { id: opts.application_id } });
    }
    if (opts.webhook_id) {
        message.webhook = await util_1.Webhook.findOneOrFail({ where: { id: opts.webhook_id } });
    }
    const permission = await (0, util_1.getPermission)(opts.author_id, channel.guild_id, opts.channel_id);
    permission.hasThrow("SEND_MESSAGES");
    if (permission.cache.member) {
        message.member = permission.cache.member;
    }
    if (opts.tts)
        permission.hasThrow("SEND_TTS_MESSAGES");
    if (opts.message_reference) {
        permission.hasThrow("READ_MESSAGE_HISTORY");
        // code below has to be redone when we add custom message routing
        if (message.guild_id !== null) {
            const guild = await util_1.Guild.findOneOrFail({ where: { id: channel.guild_id } });
            if (!guild.features.includes("CROSS_CHANNEL_REPLIES")) {
                if (opts.message_reference.guild_id !== channel.guild_id)
                    throw new util_1.HTTPError("You can only reference messages from this guild");
                if (opts.message_reference.channel_id !== opts.channel_id)
                    throw new util_1.HTTPError("You can only reference messages from this channel");
            }
        }
        /** Q: should be checked if the referenced message exists? ANSWER: NO
         otherwise backfilling won't work **/
        // @ts-ignore
        message.type = util_1.MessageType.REPLY;
    }
    // TODO: stickers/activity
    if (!allow_empty && !opts.content && !opts.embeds?.length && !opts.attachments?.length && !opts.sticker_ids?.length) {
        throw new util_1.HTTPError("Empty messages are not allowed", 50006);
    }
    let content = opts.content;
    let mention_channel_ids = [];
    let mention_role_ids = [];
    let mention_user_ids = [];
    let mention_everyone = false;
    if (content) {
        // TODO: explicit-only mentions
        message.content = content.trim();
        for (const [_, mention] of content.matchAll(util_1.CHANNEL_MENTION)) {
            if (!mention_channel_ids.includes(mention))
                mention_channel_ids.push(mention);
        }
        for (const [_, mention] of content.matchAll(util_1.USER_MENTION)) {
            if (!mention_user_ids.includes(mention))
                mention_user_ids.push(mention);
        }
        await Promise.all(Array.from(content.matchAll(util_1.ROLE_MENTION)).map(async ([_, mention]) => {
            const role = await util_1.Role.findOneOrFail({ where: { id: mention, guild_id: channel.guild_id } });
            if (role.mentionable || permission.has("MANAGE_ROLES")) {
                mention_role_ids.push(mention);
            }
        }));
        if (permission.has("MENTION_EVERYONE")) {
            mention_everyone = !!content.match(util_1.EVERYONE_MENTION) || !!content.match(util_1.HERE_MENTION);
        }
    }
    message.mention_channels = mention_channel_ids.map((x) => util_1.OrmUtils.mergeDeep(new util_1.Channel(), { id: x }));
    message.mention_roles = mention_role_ids.map((x) => util_1.OrmUtils.mergeDeep(new util_1.Role(), { id: x }));
    message.mentions = mention_user_ids.map((x) => util_1.OrmUtils.mergeDeep(new util_1.User(), { id: x }));
    message.mention_everyone = mention_everyone;
    // TODO: check and put it all in the body
    return message;
}
exports.handleMessage = handleMessage;
// TODO: cache link result in db
async function postHandleMessage(message) {
    let links = message.content?.match(LINK_REGEX);
    if (!links)
        return;
    const data = { ...message };
    data.embeds = data.embeds.filter((x) => x.type !== "link");
    links = links.slice(0, 20); // embed max 20 links — TODO: make this configurable with instance policies
    for (const link of links) {
        try {
            const request = await (0, node_fetch_1.default)(link, {
                ...DEFAULT_FETCH_OPTIONS,
                size: util_1.Config.get().limits.message.maxEmbedDownloadSize
            });
            const text = await request.text();
            const $ = cheerio_1.default.load(text);
            const title = $('meta[property="og:title"]').attr("content");
            const provider_name = $('meta[property="og:site_name"]').text();
            const author_name = $('meta[property="article:author"]').attr("content");
            const description = $('meta[property="og:description"]').attr("content") || $('meta[property="description"]').attr("content");
            const image = $('meta[property="og:image"]').attr("content");
            const url = $('meta[property="og:url"]').attr("content");
            // TODO: color
            const embed = {
                provider: {
                    url: link,
                    name: provider_name
                }
            };
            if (author_name)
                embed.author = { name: author_name };
            if (image)
                embed.thumbnail = { proxy_url: image, url: image };
            if (title)
                embed.title = title;
            if (url)
                embed.url = url;
            if (description)
                embed.description = description;
            if (title || description) {
                data.embeds.push(embed);
            }
        }
        catch (error) { }
    }
    await Promise.all([
        (0, util_1.emitEvent)({
            event: "MESSAGE_UPDATE",
            channel_id: message.channel_id,
            data
        }),
        util_1.Message.update({ id: message.id, channel_id: message.channel_id }, { embeds: data.embeds })
    ]);
}
exports.postHandleMessage = postHandleMessage;
async function sendMessage(opts) {
    const message = await handleMessage({ ...opts, timestamp: new Date() });
    //TODO: check this, removed toJSON call
    await Promise.all([
        util_1.Message.insert(message),
        (0, util_1.emitEvent)({ event: "MESSAGE_CREATE", channel_id: opts.channel_id, data: message })
    ]);
    postHandleMessage(message).catch((e) => { }); // no await as it should catch error non-blockingly
    return message;
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=Message.js.map