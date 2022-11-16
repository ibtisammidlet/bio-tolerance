"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    let users, guilds, msgs, memberships;
    // needs to be let otherwise we can't for
    let config = util_1.Config.get();
    if (!config.security.statsWorldReadable) {
        let rights = await (0, util_1.getRights)(req.user_id);
        rights.hasThrow("VIEW_SERVER_STATS");
    }
    users = await util_1.User.count();
    guilds = await util_1.Guild.count();
    msgs = await util_1.Message.count();
    memberships = await util_1.Member.count();
    res.json({ user_count: users, guild_count: guilds, msg_count: msgs, membership_rels: memberships });
});
exports.default = router;
//# sourceMappingURL=stats.js.map