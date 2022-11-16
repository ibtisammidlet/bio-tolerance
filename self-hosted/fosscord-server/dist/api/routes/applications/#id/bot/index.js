"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_2fa_1 = require("node-2fa");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({}), async (req, res) => {
    const app = await util_1.Application.findOne({ where: { id: req.params.id } });
    if (!app)
        return res.status(404);
    const username = (0, util_1.trimSpecial)(app.name);
    const discriminator = await util_1.User.generateDiscriminator(username);
    if (!discriminator) {
        // We've failed to generate a valid and unused discriminator
        throw (0, util_1.FieldErrors)({
            username: {
                code: "USERNAME_TOO_MANY_USERS",
                message: req?.t("auth:register.USERNAME_TOO_MANY_USERS")
            }
        });
    }
    const user = util_1.OrmUtils.mergeDeep(new util_1.User(), {
        created_at: new Date(),
        username: username,
        discriminator,
        id: app.id,
        bot: true,
        system: false,
        premium_since: null,
        desktop: false,
        mobile: false,
        premium: false,
        premium_type: 0,
        bio: app.description,
        mfa_enabled: true,
        totp_secret: "",
        totp_backup_codes: [],
        verified: true,
        disabled: false,
        deleted: false,
        email: null,
        rights: util_1.Config.get().register.defaultRights,
        nsfw_allowed: true,
        public_flags: "0",
        flags: "0",
        data: {
            hash: null,
            valid_tokens_since: new Date()
        },
        settings: {},
        extended_settings: {},
        fingerprints: [],
    });
    await user.save();
    app.bot = user;
    await app.save();
    res.send().status(204);
});
router.post("/reset", (0, api_1.route)({}), async (req, res) => {
    let bot = await util_1.User.findOne({ where: { id: req.params.id } });
    let owner = await util_1.User.findOne({ where: { id: req.user_id } });
    if (!bot)
        return res.status(404);
    if (owner?.totp_secret && (!req.body.code || (0, node_2fa_1.verifyToken)(owner.totp_secret, req.body.code))) {
        throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_CODE"), 60008);
    }
    bot.data = { hash: undefined, valid_tokens_since: new Date() };
    await bot.save();
    let token = await (0, util_1.generateToken)(bot.id);
    res.json({ token }).status(200);
});
router.patch("/", (0, api_1.route)({}), async (req, res) => {
    if (req.body.avatar)
        req.body.avatar = await (0, util_1.handleFile)(`/avatars/${req.params.id}`, req.body.avatar);
    let app = util_1.OrmUtils.mergeDeep(await util_1.User.findOne({ where: { id: req.params.id } }), req.body);
    await app.save();
    res.json(app).status(200);
});
exports.default = router;
//# sourceMappingURL=index.js.map