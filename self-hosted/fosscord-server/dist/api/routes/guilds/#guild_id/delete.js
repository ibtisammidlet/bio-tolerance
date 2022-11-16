"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
// discord prefixes this route with /delete instead of using the delete method
// docs are wrong https://discord.com/developers/docs/resources/guild#delete-guild
router.post("/", (0, api_1.route)({}), async (req, res) => {
    let { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id }, select: ["owner_id"] });
    if (guild.owner_id !== req.user_id)
        throw new util_1.HTTPError("You are not the owner of this guild", 401);
    await Promise.all([
        util_1.Guild.delete({ id: guild_id }),
        (0, util_1.emitEvent)({
            event: "GUILD_DELETE",
            data: {
                id: guild_id
            },
            guild_id: guild_id
        })
    ]);
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=delete.js.map