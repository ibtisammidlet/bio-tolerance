"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTranslation = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const i18next_1 = tslib_1.__importDefault(require("i18next"));
const i18next_http_middleware_1 = tslib_1.__importDefault(require("i18next-http-middleware"));
const i18next_node_fs_backend_1 = tslib_1.__importDefault(require("i18next-node-fs-backend"));
const path_1 = tslib_1.__importDefault(require("path"));
async function initTranslation(router) {
    const languages = fs_1.default.readdirSync(path_1.default.join(__dirname, "..", "..", "..", "assets", "locales"));
    const namespaces = fs_1.default.readdirSync(path_1.default.join(__dirname, "..", "..", "..", "assets", "locales", "en"));
    const ns = namespaces.filter((x) => x.endsWith(".json")).map((x) => x.slice(0, x.length - 5));
    await i18next_1.default
        .use(i18next_node_fs_backend_1.default)
        .use(i18next_http_middleware_1.default.LanguageDetector)
        .init({
        preload: languages,
        // debug: true,
        fallbackLng: "en",
        ns,
        backend: {
            loadPath: __dirname + "/../../../assets/locales/{{lng}}/{{ns}}.json"
        },
        load: "all"
    });
    router.use(i18next_http_middleware_1.default.handle(i18next_1.default, {}));
}
exports.initTranslation = initTranslation;
//# sourceMappingURL=Translation.js.map