"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.patch("/", (0, api_1.route)({ body: "UserSettingsSchema" }), async (req, res) => {
    const body = req.body;
    if (body.locale === "en")
        body.locale = "en-US"; // fix discord client crash on unkown locale
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id, bot: false }, relations: ["settings"] });
    user.settings = { ...user.settings, ...body };
    await user.save();
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=settings.js.map