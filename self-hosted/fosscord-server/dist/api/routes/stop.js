"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({}), async (req, res) => {
    //EXPERIMENTAL: have an "OPERATOR" platform permission implemented for this API route
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["rights"] });
    if ((Number(user.rights) << Number(0)) % Number(2) == Number(1)) {
        console.log("user that POSTed to the API was ALLOWED");
        console.log(user.rights);
        res.sendStatus(200);
        process.kill(process.pid, "SIGTERM");
    }
    else {
        console.log("operation failed");
        console.log(user.rights);
        res.sendStatus(403);
    }
});
exports.default = router;
//THIS API CAN ONLY BE USED BY USERS WITH THE 'OPERATOR' RIGHT (which is the value of 1) ONLY IF ANY OTHER RIGHTS ARE ADDED OR IF THE USER DOESNT HAVE PERMISSION,
//THE REQUEST WILL RETURN 403 'FORBIDDEN'
//# sourceMappingURL=stop.js.map