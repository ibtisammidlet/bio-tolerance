"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id, role_id } = req.params;
    await util_1.Member.IsInGuildOrFail(req.user_id, guild_id);
    const role = await util_1.Role.findOneOrFail({ where: { guild_id, id: role_id } });
    return res.json(role);
});
router.delete("/", (0, api_1.route)({ permission: "MANAGE_ROLES" }), async (req, res) => {
    const { guild_id, role_id } = req.params;
    if (role_id === guild_id)
        throw new util_1.HTTPError("You can't delete the @everyone role");
    await Promise.all([
        util_1.Role.delete({
            id: role_id,
            guild_id: guild_id
        }),
        (0, util_1.emitEvent)({
            event: "GUILD_ROLE_DELETE",
            guild_id,
            data: {
                guild_id,
                role_id
            }
        })
    ]);
    res.sendStatus(204);
});
// TODO: check role hierarchy
router.patch("/", (0, api_1.route)({ body: "RoleModifySchema", permission: "MANAGE_ROLES" }), async (req, res) => {
    const { role_id, guild_id } = req.params;
    const body = req.body;
    if (body.icon)
        body.icon = await (0, util_1.handleFile)(`/role-icons/${role_id}`, body.icon);
    const role = util_1.OrmUtils.mergeDeep(new util_1.Role(), {
        ...body,
        id: role_id,
        guild_id,
        permissions: String(req.permission.bitfield & BigInt(body.permissions || "0"))
    });
    await Promise.all([
        role.save(),
        (0, util_1.emitEvent)({
            event: "GUILD_ROLE_UPDATE",
            guild_id,
            data: {
                guild_id,
                role
            }
        })
    ]);
    res.json(role);
});
exports.default = router;
//# sourceMappingURL=index.js.map