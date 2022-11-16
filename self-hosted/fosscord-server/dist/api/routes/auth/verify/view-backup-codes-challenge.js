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
router.post("/", (0, api_1.route)({ body: "BackupCodesChallengeSchema" }), async (req, res) => {
    const { password } = req.body;
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["data"] });
    if (!(await bcrypt.compare(password, user.data.hash || ""))) {
        throw (0, util_1.FieldErrors)({ password: { message: req.t("auth:login.INVALID_PASSWORD"), code: "INVALID_PASSWORD" } });
    }
    return res.json({
        nonce: "NoncePlaceholder",
        regenerate_nonce: "RegenNoncePlaceholder"
    });
});
exports.default = router;
//# sourceMappingURL=view-backup-codes-challenge.js.map