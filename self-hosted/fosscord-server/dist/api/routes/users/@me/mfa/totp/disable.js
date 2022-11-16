"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_2fa_1 = require("node-2fa");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "TotpDisableSchema" }), async (req, res) => {
    const body = req.body;
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["totp_secret"] });
    const backup = await util_1.BackupCode.findOne({ where: { code: body.code } });
    if (!backup) {
        const ret = (0, node_2fa_1.verifyToken)(user.totp_secret, body.code);
        if (!ret || ret.delta != 0)
            throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_CODE"), 60008);
    }
    await util_1.User.update({ id: req.user_id }, {
        mfa_enabled: false,
        totp_secret: ""
    });
    await util_1.BackupCode.update({ user: { id: req.user_id } }, {
        expired: true
    });
    return res.json({
        token: await (0, util_1.generateToken)(user.id)
    });
});
exports.default = router;
//# sourceMappingURL=disable.js.map