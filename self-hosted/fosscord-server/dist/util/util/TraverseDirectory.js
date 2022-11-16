"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const lambert_server_1 = require("lambert-server");
//if we're using ts-node, use ts files instead of js
const extension = Symbol.for("ts-node.register.instance") in process ? "ts" : "js";
const DEFAULT_FILTER = new RegExp("^([^.].*)(?<!.d).(" + extension + ")$");
function registerRoutes(server, root) {
    return (0, lambert_server_1.traverseDirectory)({ dirname: root, recursive: true, filter: DEFAULT_FILTER }, server.registerRoute.bind(server, root));
}
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=TraverseDirectory.js.map