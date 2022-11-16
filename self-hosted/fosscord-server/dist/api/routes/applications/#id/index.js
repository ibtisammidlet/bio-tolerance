"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("#api");
const util_1 = require("#util");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    let results = await util_1.Application.findOne({ where: { id: req.params.id }, relations: ["owner", "bot"] });
    res.json(results).status(200);
});
router.patch("/", (0, api_1.route)({}), async (req, res) => {
    delete req.body.icon;
    let app = util_1.OrmUtils.mergeDeep(await util_1.Application.findOne({ where: { id: req.params.id }, relations: ["owner", "bot"] }), req.body);
    if (app.bot) {
        app.bot.bio = req.body.description;
        app.bot?.save();
    }
    if (req.body.tags)
        app.tags = req.body.tags;
    await app.save();
    res.json(app).status(200);
});
router.post("/delete", (0, api_1.route)({}), async (req, res) => {
    await util_1.Application.delete(req.params.id);
    res.send().status(200);
});
exports.default = router;
//# sourceMappingURL=index.js.map