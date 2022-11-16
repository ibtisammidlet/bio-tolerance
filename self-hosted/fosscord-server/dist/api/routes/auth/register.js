"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const picocolors_1 = require("picocolors");
const typeorm_1 = require("typeorm");
let bcrypt;
try {
    bcrypt = require("bcrypt");
}
catch {
    bcrypt = require("bcryptjs");
    console.log("Warning: using bcryptjs because bcrypt is not installed! Performance will be affected.");
}
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "RegisterSchema" }), async (req, res) => {
    const body = req.body;
    const { register, security, limits } = util_1.Config.get();
    const ip = (0, util_1.getIpAdress)(req);
    // email will be slightly modified version of the user supplied email -> e.g. protection against GMail Trick
    let email = (0, util_1.adjustEmail)(body.email);
    //check if referrer starts with any valid registration token
    //!! bypasses captcha and registration disabling !!//
    let validToken = false;
    if (req.get("Referrer") && req.get("Referrer")?.includes("token=")) {
        let token = req.get("Referrer")?.split("token=")[1].split("&")[0];
        if (token) {
            await util_1.ValidRegistrationToken.delete({ expires_at: (0, typeorm_1.LessThan)(new Date()) });
            let registrationToken = await util_1.ValidRegistrationToken.findOne({ where: { token: token, expires_at: (0, typeorm_1.MoreThan)(new Date()) } });
            if (registrationToken) {
                console.log((0, picocolors_1.yellow)(`[REGISTER] Registration token ${token} used for registration!`));
                await util_1.ValidRegistrationToken.delete(token);
                validToken = true;
            }
            else {
                console.log((0, picocolors_1.yellow)(`[REGISTER] Invalid registration token ${token} used for registration by ${ip}!`));
            }
        }
    }
    // check if the user agreed to the Terms of Service
    if (!body.consent) {
        throw (0, util_1.FieldErrors)({
            consent: { code: "CONSENT_REQUIRED", message: req.t("auth:register.CONSENT_REQUIRED") }
        });
    }
    if (register.requireCaptcha && security.captcha.enabled && !validToken) {
        const { sitekey, service } = security.captcha;
        if (!body.captcha_key) {
            return res?.status(400).json({
                captcha_key: ["captcha-required"],
                captcha_sitekey: sitekey,
                captcha_service: service
            });
        }
        const verify = await (0, util_1.verifyCaptcha)(body.captcha_key, ip);
        if (!verify.success) {
            return res.status(400).json({
                captcha_key: verify["error-codes"],
                captcha_sitekey: sitekey,
                captcha_service: service
            });
        }
    }
    // check if registration is allowed
    if (!register.allowNewRegistration && !validToken) {
        throw (0, util_1.FieldErrors)({
            email: { code: "REGISTRATION_DISABLED", message: req.t("auth:register.REGISTRATION_DISABLED") }
        });
    }
    if (register.blockProxies) {
        let data;
        try {
            data = await (0, util_1.IPAnalysis)(ip);
        }
        catch (e) {
            console.warn((0, picocolors_1.red)(`[REGISTER]: Failed to analyze IP ${ip}: failed to contact api.ipdata.co!`), e.message);
        }
        if (data && (0, util_1.isProxy)(data)) {
            console.log((0, picocolors_1.yellow)(`[REGISTER] Proxy ${ip} blocked from registration!`));
            throw new util_1.HTTPError(req.t("auth:register.IP_BLOCKED"));
        }
    }
    // TODO: gift_code_sku_id?
    // TODO: check password strength
    if (email) {
        // check if there is already an account with this email
        const exists = await util_1.User.findOne({ where: { email: email } });
        if (exists && !register.disabled) {
            throw (0, util_1.FieldErrors)({
                email: {
                    code: "EMAIL_ALREADY_REGISTERED",
                    message: req.t("auth:register.EMAIL_ALREADY_REGISTERED")
                }
            });
        }
    }
    else if (register.email.required) {
        throw (0, util_1.FieldErrors)({
            email: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
        });
    }
    // If no password is provided, this is a guest account
    if (register.dateOfBirth.required && !body.date_of_birth && body.password) {
        throw (0, util_1.FieldErrors)({
            date_of_birth: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
        });
    }
    else if (register.dateOfBirth.required && register.dateOfBirth.minimum) {
        const minimum = new Date();
        minimum.setFullYear(minimum.getFullYear() - register.dateOfBirth.minimum);
        body.date_of_birth = new Date(body.date_of_birth);
        // higher is younger
        if (body.date_of_birth > minimum) {
            throw (0, util_1.FieldErrors)({
                date_of_birth: {
                    code: "DATE_OF_BIRTH_UNDERAGE",
                    message: req.t("auth:register.DATE_OF_BIRTH_UNDERAGE", { years: register.dateOfBirth.minimum })
                }
            });
        }
    }
    if (body.password) {
        // the salt is saved in the password refer to bcrypt docs
        body.password = await bcrypt.hash(body.password, 12);
    }
    else if (register.password.required) {
        throw (0, util_1.FieldErrors)({
            password: { code: "BASE_TYPE_REQUIRED", message: req.t("common:field.BASE_TYPE_REQUIRED") }
        });
    }
    if (!body.invite && (register.requireInvite || (register.guestsRequireInvite && !register.email))) {
        // require invite to register -> e.g. for organizations to send invites to their employees
        throw (0, util_1.FieldErrors)({
            email: { code: "INVITE_ONLY", message: req.t("auth:register.INVITE_ONLY") }
        });
    }
    if (!validToken &&
        limits.absoluteRate.register.enabled &&
        (await await util_1.User.count({ where: { created_at: (0, typeorm_1.MoreThan)(new Date(Date.now() - limits.absoluteRate.register.window)) } })) >=
            limits.absoluteRate.register.limit) {
        console.log((0, picocolors_1.yellow)(`[REGISTER] Global register rate limit exceeded for ${(0, util_1.getIpAdress)(req)}: ${process.env.LOG_SENSITIVE ? req.body.email : "<email redacted>"}, ${req.body.username}, ${req.body.invite ?? "No invite given"}`));
        let oldest = await util_1.User.findOne({
            where: { created_at: (0, typeorm_1.MoreThan)(new Date(Date.now() - limits.absoluteRate.register.window)) },
            order: { created_at: "ASC" }
        });
        if (!oldest) {
            console.warn((0, picocolors_1.red)(`[REGISTER/WARN] Global rate limits exceeded, but no oldest user found. This should not happen. Did you misconfigure the limits?`));
        }
        else {
            let retryAfterSec = Math.ceil((oldest.created_at.getTime() - new Date(Date.now() - limits.absoluteRate.register.window).getTime()) / 1000);
            return res
                .status(429)
                .set("X-RateLimit-Limit", `${limits.absoluteRate.register.limit}`)
                .set("X-RateLimit-Remaining", "0")
                .set("X-RateLimit-Reset", `${(oldest.created_at.getTime() + limits.absoluteRate.register.window) / 1000}`)
                .set("X-RateLimit-Reset-After", `${retryAfterSec}`)
                .set("X-RateLimit-Global", `true`)
                .set("Retry-After", `${retryAfterSec}`)
                .set("X-RateLimit-Bucket", `register`)
                .send({ message: req.t("auth:register.TOO_MANY_REGISTRATIONS"), retry_after: retryAfterSec, global: true });
        }
    }
    const user = await util_1.User.register({ ...body, req });
    if (body.invite) {
        // await to fail if the invite doesn't exist (necessary for requireInvite to work properly) (username only signups are possible)
        await util_1.Invite.joinGuild(user.id, body.invite);
    }
    return res.json({ token: await (0, util_1.generateToken)(user.id) });
});
exports.default = router;
/**
 * POST /auth/register
 * @argument { "fingerprint":"805826570869932034.wR8vi8lGlFBJerErO9LG5NViJFw", "email":"qo8etzvaf@gmail.com", "username":"qp39gr98", "password":"wtp9gep9gw", "invite":null, "consent":true, "date_of_birth":"2000-04-04", "gift_code_sku_id":null, "captcha_key":null}
 *
 * Field Error
 * @returns { "code": 50035, "errors": { "consent": { "_errors": [{ "code": "CONSENT_REQUIRED", "message": "You must agree to Discord's Terms of Service and Privacy Policy." }]}}, "message": "Invalid Form Body"}
 *
 * Success 200:
 * @returns {token: "OMITTED"}
 */
//# sourceMappingURL=register.js.map