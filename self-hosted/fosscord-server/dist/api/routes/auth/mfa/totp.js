"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const node_2fa_1 = require("node-2fa");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "TotpSchema" }), async (req, res) => {
    const { code, ticket, gift_code_sku_id, login_source } = req.body;
    const user = await util_1.User.findOneOrFail({
        where: {
            totp_last_ticket: ticket
        },
        select: ["id", "totp_secret", "settings"]
    });
    const backup = await util_1.BackupCode.findOne({ where: { code: code, expired: false, consumed: false, user: { id: user.id } } });
    if (!backup) {
        const ret = (0, node_2fa_1.verifyToken)(user.totp_secret, code);
        if (!ret || ret.delta != 0)
            throw new util_1.HTTPError(req.t("auth:login.INVALID_TOTP_CODE"), 60008);
    }
    else {
        backup.consumed = true;
        await backup.save();
    }
    await util_1.User.update({ id: user.id }, { totp_last_ticket: "" });
    return res.json({
        token: await (0, util_1.generateToken)(user.id),
        user_settings: user.settings
    });
});
exports.default = router;
//# sourceMappingURL=totp.js.map