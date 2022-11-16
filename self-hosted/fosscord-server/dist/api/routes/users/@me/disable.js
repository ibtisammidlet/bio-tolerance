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
router.post("/", (0, api_1.route)({}), async (req, res) => {
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: ["data"] }); //User object
    let correctpass = true;
    if (user.data.hash) {
        // guest accounts can delete accounts without password
        correctpass = await bcrypt.compare(req.body.password, user.data.hash); //Not sure if user typed right password :/
    }
    if (correctpass) {
        await util_1.User.update({ id: req.user_id }, { disabled: true });
        res.sendStatus(204);
    }
    else {
        res.status(400).json({ message: "Password does not match", code: 50018 });
    }
});
exports.default = router;
//# sourceMappingURL=disable.js.map