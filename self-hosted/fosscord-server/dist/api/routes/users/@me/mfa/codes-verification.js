"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({ body: "CodesVerificationSchema" }), async (req, res) => {
    const { key, nonce, regenerate } = req.body;
    // TODO: We don't have email/etc etc, so can't send a verification code.
    // Once that's done, this route can verify `key`
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id } });
    var codes;
    if (regenerate) {
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
//# sourceMappingURL=codes-verification.js.map