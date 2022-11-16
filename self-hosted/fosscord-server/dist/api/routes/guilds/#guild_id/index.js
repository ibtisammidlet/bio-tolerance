"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    const [guild, member] = await Promise.all([
        util_1.Guild.findOneOrFail({ where: { id: guild_id } }),
        util_1.Member.findOne({ where: { guild_id, id: req.user_id } })
    ]);
    if (!member)
        throw new util_1.HTTPError("You are not a member of the guild you are trying to access", 401);
    // @ts-ignore
    guild.joined_at = member?.joined_at;
    return res.send(guild);
});
router.patch("/", (0, api_1.route)({ body: "GuildUpdateSchema" }), async (req, res) => {
    const body = req.body;
    const { guild_id } = req.params;
    const rights = await (0, util_1.getRights)(req.user_id);
    const permission = await (0, util_1.getPermission)(req.user_id, guild_id);
    if (!rights.has("MANAGE_GUILDS") || !permission.has("MANAGE_GUILD"))
        throw util_1.DiscordApiErrors.MISSING_PERMISSIONS.withParams("MANAGE_GUILD");
    // TODO: guild update check image
    if (body.icon)
        body.icon = await (0, util_1.handleFile)(`/icons/${guild_id}`, body.icon);
    if (body.banner)
        body.banner = await (0, util_1.handleFile)(`/banners/${guild_id}`, body.banner);
    if (body.splash)
        body.splash = await (0, util_1.handleFile)(`/splashes/${guild_id}`, body.splash);
    let guild = await util_1.Guild.findOneOrFail({
        where: { id: guild_id },
        relations: ["emojis", "roles", "stickers"]
    });
    // TODO: check if body ids are valid
    guild = util_1.OrmUtils.mergeDeep(guild, body);
    //TODO: check this, removed toJSON call
    const data = JSON.parse(JSON.stringify(guild));
    // TODO: guild hashes
    // TODO: fix vanity_url_code, template_id
    delete data.vanity_url_code;
    delete data.template_id;
    await Promise.all([guild.save(), (0, util_1.emitEvent)({ event: "GUILD_UPDATE", data, guild_id })]);
    return res.json(data);
});
exports.default = router;
//# sourceMappingURL=index.js.map