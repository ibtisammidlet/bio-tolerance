"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/:id", (0, api_1.route)({}), async (req, res) => {
    const { id } = req.params;
    const note = await util_1.Note.findOneOrFail({
        where: {
            owner: { id: req.user_id },
            target: { id: id }
        }
    });
    return res.json({
        note: note?.content,
        note_user_id: id,
        user_id: req.user_id
    });
});
router.put("/:id", (0, api_1.route)({}), async (req, res) => {
    const { id } = req.params;
    const owner = await util_1.User.findOneOrFail({ where: { id: req.user_id } });
    const target = await util_1.User.findOneOrFail({ where: { id: id } }); //if noted user does not exist throw
    const { note } = req.body;
    if (note && note.length) {
        // upsert a note
        if (await util_1.Note.findOne({ where: { owner: { id: owner.id }, target: { id: target.id } } })) {
            util_1.Note.update({ owner: { id: owner.id }, target: { id: target.id } }, { owner, target, content: note });
        }
        else {
            util_1.Note.insert({ id: util_1.Snowflake.generate(), owner, target, content: note });
        }
    }
    else {
        await util_1.Note.delete({ owner: { id: owner.id }, target: { id: target.id } });
    }
    await (0, util_1.emitEvent)({
        event: "USER_NOTE_UPDATE",
        data: {
            note: note,
            id: target.id
        },
        user_id: owner.id
    });
    return res.status(204);
});
exports.default = router;
//# sourceMappingURL=notes.js.map