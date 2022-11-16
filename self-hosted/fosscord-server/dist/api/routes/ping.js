"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), (req, res) => {
    const { general } = util_1.Config.get();
    res.send({
        ping: "pong!",
        instance: {
            id: general.instanceId,
            name: general.instanceName,
            description: general.instanceDescription,
            image: general.image,
            correspondenceEmail: general.correspondenceEmail,
            correspondenceUserID: general.correspondenceUserID,
            frontPage: general.frontPage,
            tosPage: general.tosPage
        }
    });
});
exports.default = router;
//# sourceMappingURL=ping.js.map