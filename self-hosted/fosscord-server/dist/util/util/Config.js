"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const _1 = require(".");
const config_1 = require("../config");
const Config_1 = require("../entities/Config");
// TODO: yaml instead of json
const overridePath = process.env.CONFIG_PATH ?? "";
let config;
let pairs;
// TODO: use events to inform about config updates
// Config keys are separated with _
exports.Config = {
    init: async function init() {
        if (config)
            return config;
        console.log("[Config] Loading configuration...");
        pairs = await Config_1.ConfigEntity.find();
        config = pairsToConfig(pairs);
        //config = (config || {}).merge(new ConfigValue());
        config = _1.OrmUtils.mergeDeep(new config_1.ConfigValue(), config);
        if (process.env.CONFIG_PATH)
            try {
                const overrideConfig = JSON.parse(fs_1.default.readFileSync(overridePath, { encoding: "utf8" }));
                config = _1.OrmUtils.mergeDeep(config, overrideConfig);
            }
            catch (error) {
                fs_1.default.writeFileSync(overridePath, JSON.stringify(config, null, 4));
            }
        if (fs_1.default.existsSync(path_1.default.join(process.cwd(), "initial.json")))
            try {
                console.log("[Config] Found initial configuration, merging...");
                const overrideConfig = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), "initial.json"), { encoding: "utf8" }));
                config = _1.OrmUtils.mergeDeep(config, overrideConfig);
                fs_1.default.rmSync(path_1.default.join(process.cwd(), "initial.json"));
            }
            catch (error) {
                fs_1.default.writeFileSync(path_1.default.join(process.cwd(), "failed.conf"), JSON.stringify(config, null, 4));
            }
        return this.set(config);
    },
    get: function get() {
        if (!config) {
            if (/--debug|--inspect/.test(process.execArgv.join(" ")))
                console.log("Oops.. trying to get config without config existing... Returning defaults... (Is the database still initialising?)");
            return new config_1.ConfigValue();
        }
        return config;
    },
    set: function set(val) {
        if (!config || !val)
            return;
        config = val.merge(config);
        return applyConfig(config);
    }
};
function applyConfig(val) {
    async function apply(obj, key = "") {
        if (typeof obj === "object" && obj !== null)
            return Promise.all(Object.keys(obj).map((k) => apply(obj[k], key ? `${key}_${k}` : k)));
        let pair = pairs.find((x) => x.key === key);
        if (!pair)
            pair = new Config_1.ConfigEntity();
        pair.key = key;
        pair.value = obj;
        return pair.save();
    }
    if (process.env.CONFIG_PATH) {
        if (/--debug|--inspect/.test(process.execArgv.join(" ")))
            console.log(`Writing config: ${process.env.CONFIG_PATH}`);
        fs_1.default.writeFileSync(overridePath, JSON.stringify(val, null, 4));
    }
    return apply(val);
}
function pairsToConfig(pairs) {
    let value = {};
    pairs.forEach((p) => {
        const keys = p.key.split("_");
        let obj = value;
        let prev = "";
        let prevObj = obj;
        let i = 0;
        for (const key of keys) {
            if (!isNaN(Number(key)) && !prevObj[prev]?.length)
                prevObj[prev] = obj = [];
            if (i++ === keys.length - 1)
                obj[key] = p.value;
            else if (!obj[key])
                obj[key] = {};
            prev = key;
            prevObj = obj;
            obj = obj[key];
        }
    });
    return value;
}
//# sourceMappingURL=Config.js.map