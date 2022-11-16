"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.get("/", (0, api_1.route)({ right: "OPERATOR" }), async (req, res) => {
    let count = req.query.count ?? 1;
    let tokens = [];
    let dbtokens = [];
    for (let i = 0; i < count; i++) {
        let token = (0, util_1.random)(req.query.length ?? 255);
        let vrt = new util_1.ValidRegistrationToken();
        vrt.token = token;
        dbtokens.push(vrt);
        if (req.query.include_url == "true")
            token = `${util_1.Config.get().general.publicUrl}/register?token=${token}`;
        tokens.push(token);
    }
    await util_1.ValidRegistrationToken.save(dbtokens, { chunk: 1000, reload: false, transaction: false });
    if (req.query.plain == "true") {
        if (count == 1)
            res.send(tokens[0]);
        else
            res.send(tokens.join("\n"));
    }
    else if (count == 1)
        res.json({ token: tokens[0] });
    else
        res.json({ tokens });
});
//# sourceMappingURL=generate-registration-tokens.js.map