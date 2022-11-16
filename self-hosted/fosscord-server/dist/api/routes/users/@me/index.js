"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
let bcrypt;
try {
    bcrypt = require("bcrypt");
}
catch {
    bcrypt = require("bcryptjs");
    console.log("Warning: using bcryptjs because bcrypt is not installed! Performance will be affected.");
}
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    res.json(await util_1.User.findOne({ select: util_1.PrivateUserProjection, where: { id: req.user_id } }));
});
router.patch("/", (0, api_1.route)({ body: "UserModifySchema" }), async (req, res) => {
    var token = null;
    const body = req.body;
    if (body.avatar)
        body.avatar = await (0, util_1.handleFile)(`/avatars/${req.user_id}`, body.avatar);
    if (body.banner)
        body.banner = await (0, util_1.handleFile)(`/banners/${req.user_id}`, body.banner);
    let user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: [...util_1.PrivateUserProjection, "data"] });
    if (body.password) {
        if (user.data?.hash) {
            const same_password = await bcrypt.compare(body.password, user.data.hash || "");
            if (!same_password) {
                throw (0, util_1.FieldErrors)({ password: { message: req.t("auth:login.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
            }
        }
        else {
            user.data.hash = await bcrypt.hash(body.password, 12);
        }
    }
    if (body.email) {
        body.email = (0, util_1.adjustEmail)(body.email);
        if (!body.email && util_1.Config.get().register.email.required)
            throw (0, util_1.FieldErrors)({ email: { message: req.t("auth:register.EMAIL_INVALID"), code: "EMAIL_INVALID" } });
        if (!body.password)
            throw (0, util_1.FieldErrors)({ password: { message: req.t("auth:register.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
    }
    if (body.new_password) {
        if (!body.password && !user.email) {
            throw (0, util_1.FieldErrors)({
                password: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
            });
        }
        user.data.hash = await bcrypt.hash(body.new_password, 12);
        user.data.valid_tokens_since = new Date();
        token = (await (0, util_1.generateToken)(user.id));
    }
    if (body.username) {
        let check_username = body?.username?.replace(/\s/g, "");
        if (!check_username) {
            throw (0, util_1.FieldErrors)({
                username: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
            });
        }
    }
    user = util_1.OrmUtils.mergeDeep(user, body);
    await user.save();
    // @ts-ignore
    delete user.data;
    // TODO: send update member list event in gateway
    await (0, util_1.emitEvent)({
        event: "USER_UPDATE",
        user_id: req.user_id,
        data: user
    });
    res.json({
        ...user,
        token
    });
});
exports.default = router;
// {"message": "Invalid two-factor code", "code": 60008}
//# sourceMappingURL=index.js.map