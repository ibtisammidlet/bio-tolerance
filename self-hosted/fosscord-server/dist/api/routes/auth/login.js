"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const api_1 = require("#api");
const util_1 = require("#util");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
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
exports.default = router;
router.post("/", (0, api_1.route)({ body: "LoginSchema" }), async (req, res) => {
    const { login, password, captcha_key, undelete } = req.body;
    const email = (0, util_1.adjustEmail)(login);
    const ip = (0, util_1.getIpAdress)(req);
    const config = util_1.Config.get();
    if (config.login.requireCaptcha && config.security.captcha.enabled) {
        const { sitekey, service } = config.security.captcha;
        if (!captcha_key) {
            return res.status(400).json({
                captcha_key: ["captcha-required"],
                captcha_sitekey: sitekey,
                captcha_service: service
            });
        }
        const ip = (0, util_1.getIpAdress)(req);
        const verify = await (0, util_1.verifyCaptcha)(captcha_key, ip);
        if (!verify.success) {
            return res.status(400).json({
                captcha_key: verify["error-codes"],
                captcha_sitekey: sitekey,
                captcha_service: service
            });
        }
    }
    const user = await util_1.User.findOneOrFail({
        where: [{ phone: login }, { email: login }],
        select: ["data", "id", "disabled", "deleted", "settings", "totp_secret", "mfa_enabled"]
    }).catch((e) => {
        throw (0, util_1.FieldErrors)({ login: { message: req.t("auth:login.INVALID_LOGIN"), code: "INVALID_LOGIN" } });
    });
    if (undelete) {
        // undelete refers to un'disable' here
        if (user.disabled)
            await util_1.User.update({ id: user.id }, { disabled: false });
        if (user.deleted)
            await util_1.User.update({ id: user.id }, { deleted: false });
    }
    else {
        if (user.deleted)
            return res.status(400).json({ message: "This account is scheduled for deletion.", code: 20011 });
        if (user.disabled)
            return res.status(400).json({ message: req.t("auth:login.ACCOUNT_DISABLED"), code: 20013 });
    }
    // the salt is saved in the password refer to bcrypt docs
    const same_password = await bcrypt.compare(password, user.data.hash || "");
    if (!same_password) {
        throw (0, util_1.FieldErrors)({ password: { message: req.t("auth:login.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
    }
    if (user.mfa_enabled) {
        // TODO: This is not a discord.com ticket. I'm not sure what it is but I'm lazy
        const ticket = crypto_1.default.randomBytes(40).toString("hex");
        await util_1.User.update({ id: user.id }, { totp_last_ticket: ticket });
        return res.json({
            ticket: ticket,
            mfa: true,
            sms: false,
            token: null
        });
    }
    const token = await (0, util_1.generateToken)(user.id);
    // Notice this will have a different token structure, than discord
    // Discord header is just the user id as string, which is not possible with npm-jsonwebtoken package
    // https://user-images.githubusercontent.com/6506416/81051916-dd8c9900-8ec2-11ea-8794-daf12d6f31f0.png
    res.json({ token, settings: user.settings });
});
/**
 * POST /auth/login
 * @argument { login: "email@gmail.com", password: "cleartextpassword", undelete: false, captcha_key: null, login_source: null, gift_code_sku_id: null, }

 * MFA required:
 * @returns {"token": null, "mfa": true, "sms": true, "ticket": "SOME TICKET JWT TOKEN"}

 * Captcha required:
 * @returns {"captcha_key": ["captcha-required"], "captcha_sitekey": null, "captcha_service": "recaptcha"}

 * Sucess:
 * @returns {"token": "USERTOKEN", "settings": {"locale": "en", "theme": "dark"}}

 */
//# sourceMappingURL=login.js.map