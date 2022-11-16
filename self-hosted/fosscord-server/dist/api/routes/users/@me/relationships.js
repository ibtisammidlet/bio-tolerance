"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
const userProjection = ["relationships", ...util_1.PublicUserProjection];
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const user = await util_1.User.findOneOrFail({
        where: { id: req.user_id },
        relations: ["relationships", "relationships.to"],
        select: ["relationships"]
    });
    //TODO DTO
    const related_users = user.relationships.map((r) => {
        return {
            id: r.to.id,
            type: r.type,
            nickname: null,
            user: r.to.toPublicUser()
        };
    });
    return res.json(related_users);
});
router.put("/:id", (0, api_1.route)({ body: "RelationshipPutSchema" }), async (req, res) => {
    return await updateRelationship(req, res, await util_1.User.findOneOrFail({
        where: { id: req.params.id },
        relations: ["relationships", "relationships.to"],
        select: userProjection
    }), req.body.type ?? util_1.RelationshipType.friends);
});
router.post("/", (0, api_1.route)({ body: "RelationshipPostSchema" }), async (req, res) => {
    return await updateRelationship(req, res, await util_1.User.findOneOrFail({
        relations: ["relationships", "relationships.to"],
        select: userProjection,
        where: {
            discriminator: String(req.body.discriminator).padStart(4, "0"),
            username: req.body.username
        }
    }), req.body.type);
});
router.delete("/:id", (0, api_1.route)({}), async (req, res) => {
    const { id } = req.params;
    if (id === req.user_id)
        throw new util_1.HTTPError(req.t("common:relationship.REMOVE_SELF"));
    const user = await util_1.User.findOneOrFail({ where: { id: req.user_id }, select: userProjection, relations: ["relationships"] });
    const friend = await util_1.User.findOneOrFail({ where: { id: id }, select: userProjection, relations: ["relationships"] });
    const relationship = user.relationships.find((x) => x.to_id === id);
    const friendRequest = friend.relationships.find((x) => x.to_id === req.user_id);
    if (!relationship)
        throw new util_1.HTTPError(req.t("common:relationship.NOT_FRIENDS"));
    if (relationship?.type === util_1.RelationshipType.blocked) {
        // unblock user
        await Promise.all([
            util_1.Relationship.delete({ id: relationship.id }),
            (0, util_1.emitEvent)({
                event: "RELATIONSHIP_REMOVE",
                user_id: req.user_id,
                data: relationship.toPublicRelationship()
            })
        ]);
        return res.sendStatus(204);
    }
    if (friendRequest && friendRequest.type !== util_1.RelationshipType.blocked) {
        await Promise.all([
            util_1.Relationship.delete({ id: friendRequest.id }),
            await (0, util_1.emitEvent)({
                event: "RELATIONSHIP_REMOVE",
                data: friendRequest.toPublicRelationship(),
                user_id: id
            })
        ]);
    }
    await Promise.all([
        util_1.Relationship.delete({ id: relationship.id }),
        (0, util_1.emitEvent)({
            event: "RELATIONSHIP_REMOVE",
            data: relationship.toPublicRelationship(),
            user_id: req.user_id
        })
    ]);
    return res.sendStatus(204);
});
exports.default = router;
async function updateRelationship(req, res, friend, type) {
    const id = friend.id;
    if (id === req.user_id)
        throw new util_1.HTTPError(req.t("common:relationship.ADD_SELF"));
    const user = await util_1.User.findOneOrFail({
        where: { id: req.user_id },
        relations: ["relationships", "relationships.to"],
        select: userProjection
    });
    let relationship = user.relationships.find((x) => x.to_id === id);
    const friendRequest = friend.relationships.find((x) => x.to_id === req.user_id);
    // TODO: you can add infinitely many blocked users (should this be prevented?)
    if (type === util_1.RelationshipType.blocked) {
        if (relationship) {
            if (relationship.type === util_1.RelationshipType.blocked)
                throw new util_1.HTTPError(req.t("common:relationship.ALREADY_BLOCKED"));
            relationship.type = util_1.RelationshipType.blocked;
            await relationship.save();
        }
        else {
            relationship = await util_1.OrmUtils.mergeDeep(new util_1.Relationship(), { to_id: id, type: util_1.RelationshipType.blocked, from_id: req.user_id }).save();
        }
        if (friendRequest && friendRequest.type !== util_1.RelationshipType.blocked) {
            await Promise.all([
                util_1.Relationship.delete({ id: friendRequest.id }),
                (0, util_1.emitEvent)({
                    event: "RELATIONSHIP_REMOVE",
                    data: friendRequest.toPublicRelationship(),
                    user_id: id
                })
            ]);
        }
        await (0, util_1.emitEvent)({
            event: "RELATIONSHIP_ADD",
            data: relationship.toPublicRelationship(),
            user_id: req.user_id
        });
        return res.sendStatus(204);
    }
    const { maxFriends } = util_1.Config.get().limits.user;
    if (user.relationships.length >= maxFriends)
        throw util_1.DiscordApiErrors.MAXIMUM_FRIENDS.withParams(maxFriends);
    let incoming_relationship = util_1.OrmUtils.mergeDeep(new util_1.Relationship(), {
        nickname: undefined,
        type: util_1.RelationshipType.incoming,
        to: user,
        from: friend
    });
    let outgoing_relationship = util_1.OrmUtils.mergeDeep(new util_1.Relationship(), {
        nickname: undefined,
        type: util_1.RelationshipType.outgoing,
        to: friend,
        from: user
    });
    if (friendRequest) {
        //TODO: shouldn't this be failed silently?
        if (friendRequest.type === util_1.RelationshipType.blocked)
            throw new util_1.HTTPError(req.t("common:relationship.BLOCKED"));
        if (friendRequest.type === util_1.RelationshipType.friends)
            throw new util_1.HTTPError(req.t("common:relationship.ALREADY_FRIENDS"));
        // accept friend request
        incoming_relationship = friendRequest; //TODO: checkme, any cast
        incoming_relationship.type = util_1.RelationshipType.friends;
    }
    if (relationship) {
        if (relationship.type === util_1.RelationshipType.outgoing)
            throw new util_1.HTTPError(req.t("common:relationship.ALREADY_SENT"));
        if (relationship.type === util_1.RelationshipType.blocked)
            throw new util_1.HTTPError(req.t("common:relationship.UNBLOCK"));
        if (relationship.type === util_1.RelationshipType.friends)
            throw new util_1.HTTPError(req.t("common:relationship.ALREADY_FRIENDS"));
        outgoing_relationship = relationship; //TODO: checkme, any cast
        outgoing_relationship.type = util_1.RelationshipType.friends;
    }
    await Promise.all([
        incoming_relationship.save(),
        outgoing_relationship.save(),
        (0, util_1.emitEvent)({
            event: "RELATIONSHIP_ADD",
            data: outgoing_relationship.toPublicRelationship(),
            user_id: req.user_id
        }),
        (0, util_1.emitEvent)({
            event: "RELATIONSHIP_ADD",
            data: {
                ...incoming_relationship.toPublicRelationship(),
                should_notify: true
            },
            user_id: id
        })
    ]);
    return res.sendStatus(204);
}
//# sourceMappingURL=relationships.js.map