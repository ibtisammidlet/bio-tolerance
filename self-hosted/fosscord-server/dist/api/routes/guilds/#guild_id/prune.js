"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inactiveMembers = void 0;
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const router = (0, express_1.Router)();
//Returns all inactive members, respecting role hierarchy
const inactiveMembers = async (guild_id, user_id, days, roles = []) => {
    let date = new Date();
    date.setDate(date.getDate() - days);
    //Snowflake should have `generateFromTime` method? Or similar?
    let minId = BigInt(date.valueOf() - util_1.Snowflake.EPOCH) << BigInt(22);
    /**
    idea: ability to customise the cutoff variable
    possible candidates: public read receipt, last presence, last VC leave
    **/
    let members = await util_1.Member.find({
        where: [
            {
                guild_id,
                last_message_id: (0, typeorm_1.LessThan)(minId.toString())
            },
            {
                last_message_id: (0, typeorm_1.IsNull)()
            }
        ],
        relations: ["roles"]
    });
    console.log(members);
    if (!members.length)
        return [];
    //I'm sure I can do this in the above db query ( and it would probably be better to do so ), but oh well.
    if (roles.length && members.length)
        members = members.filter((user) => user.roles?.some((role) => roles.includes(role.id)));
    const me = await util_1.Member.findOneOrFail({ where: { id: user_id, guild_id }, relations: ["roles"] });
    const myHighestRole = Math.max(...(me.roles?.map((x) => x.position) || []));
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    members = members.filter((member) => member.id !== guild.owner_id && //can't kick owner
        member.roles?.some((role) => role.position < myHighestRole || //roles higher than me can't be kicked
            me.id === guild.owner_id //owner can kick anyone
        ));
    return members;
};
exports.inactiveMembers = inactiveMembers;
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const days = parseInt(req.query.days);
    let roles = req.query.include_roles;
    if (typeof roles === "string")
        roles = [roles]; //express will return array otherwise
    const members = await (0, exports.inactiveMembers)(req.params.guild_id, req.user_id, days, roles);
    res.send({ pruned: members.length });
});
router.post("/", (0, api_1.route)({ permission: "KICK_MEMBERS", right: "KICK_BAN_MEMBERS" }), async (req, res) => {
    const days = parseInt(req.body.days);
    let roles = req.query.include_roles;
    if (typeof roles === "string")
        roles = [roles];
    const { guild_id } = req.params;
    const members = await (0, exports.inactiveMembers)(guild_id, req.user_id, days, roles);
    await Promise.all(members.map((x) => util_1.Member.removeFromGuild(x.id, guild_id)));
    res.send({ purged: members.length });
});
exports.default = router;
//# sourceMappingURL=prune.js.map