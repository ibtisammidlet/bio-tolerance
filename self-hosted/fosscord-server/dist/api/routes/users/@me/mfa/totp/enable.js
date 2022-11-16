"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_2fa_1 = require("node-2fa");
let bcrypt;
try {
    bcrypt = require("bcrypt");
}
catch {
    bcrypt = require("bcryptjs");
    console.log("Warning: using bcryptjs because bcrypt is not installed! Performance will be affected.");
}
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "TotpEnableSchema" }), async (req, res) => {
    const body = req.body;
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["data"] });
    // TODO: Are guests allowed to enable 2fa?
    if (user.data.hash) {
        if (!(await bcrypt.compare(body.password, user.data.hash))) {
            throw new util_1.HTTPError(req.t("auth:login.INVALID_PASSWORD"));
        }
    }
    if (!body.secret)
        throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_SECRET"), 60005);
    if (!body.code)
        throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_CODE"), 60008);
    if ((0, node_2fa_1.verifyToken)(body.secret, body.code)?.delta != 0)
        throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_CODE"), 60008);
    let backup_codes = [];
    if (util_1.Config.get().security.twoFactor.generateBackupCodes) {
        backup_codes = (0, util_1.generateMfaBackupCodes)(req.user_id);
        await Promise.all(backup_codes.map((x) => x.save()));
    }
    await util_1.User.update({ id: req.user_id }, { mfa_enabled: true, totp_secret: body.secret });
    res.send({
        token: await (0, util_1.generateToken)(user.id),
        backup_codes: backup_codes.map((x) => ({ ...x, expired: undefined }))
    });
});
exports.default = router;
//# sourceMappingURL=enable.js.map