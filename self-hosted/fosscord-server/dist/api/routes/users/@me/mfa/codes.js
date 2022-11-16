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
// TODO: This route is replaced with users/@me/mfa/codes-verification in newer clients
router.post("/", (0, api_1.route)({ body: "MfaCodesSchema" }), async (req, res) => {
    const { password, regenerate } = req.body;
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["data"] });
    if (!(await bcrypt.compare(password, user.data.hash || ""))) {
        throw (0, util_1.FieldErrors)({ password: { message: req.t("auth:login.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
    }
    var codes;
    if (regenerate && util_1.Config.get().security.twoFactor.generateBackupCodes) {
        await util_1.BackupCode.update({ user: { id: req.user_id } }, { expired: true });
        codes = (0, util_1.generateMfaBackupCodes)(req.user_id);
        await Promise.all(codes.map((x) => x.save()));
    }
    else {
        codes = await util_1.BackupCode.find({
            where: {
                user: {
                    id: req.user_id
                },
                expired: false
            }
        });
    }
    return res.json({
        backup_codes: codes.map((x) => ({ ...x, expired: undefined }))
    });
});
exports.default = router;
//# sourceMappingURL=codes.js.map