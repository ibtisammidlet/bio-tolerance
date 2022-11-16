"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabase = exports.getOrInitialiseDatabase = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = require("dotenv");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const picocolors_1 = require("picocolors");
const process_1 = require("process");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Models = tslib_1.__importStar(require("../entities"));
const entities_1 = require("../entities");
// UUID extension option is only supported with postgres
// We want to generate all id's with Snowflakes that's why we have our own BaseEntity class
let promise;
let dataSource;
async function getOrInitialiseDatabase() {
    //if (dataSource) return dataSource; // prevent initalizing multiple times
    if (dataSource.isInitialized)
        return dataSource;
    await dataSource.initialize();
    console.log(`[Database] ${(0, picocolors_1.green)("Connected!")}`);
    await dataSource.runMigrations();
    console.log(`[Database] ${(0, picocolors_1.green)("Up to date!")}`);
    if ("DB_MIGRATE" in process.env) {
        console.log("DB_MIGRATE specified, exiting!");
        (0, process_1.exit)(0);
    }
    return dataSource;
}
exports.getOrInitialiseDatabase = getOrInitialiseDatabase;
function closeDatabase() {
    dataSource?.destroy();
}
exports.closeDatabase = closeDatabase;
function getDataSourceOptions() {
    (0, dotenv_1.config)();
    //get connection string and check for migrations
    const dbConnectionString = process.env.DATABASE || path_1.default.join(process.cwd(), "database.db");
    const type = dbConnectionString.includes("://") ? dbConnectionString.split(":")[0]?.replace("+srv", "") : "sqlite";
    const isSqlite = type.includes("sqlite");
    const migrationsExist = fs_1.default.existsSync(path_1.default.join(__dirname, "..", "migrations", type));
    //read env vars
    const synchronizeInsteadOfMigrations = "DB_UNSAFE" in process.env;
    const verboseDb = "DB_VERBOSE" in process.env;
    if (isSqlite)
        console.log(`[Database] ${(0, picocolors_1.red)(`You are running sqlite! Please keep in mind that we recommend setting up a dedicated database!`)}`);
    if (verboseDb)
        console.log(`[Database] ${(0, picocolors_1.red)(`Verbose database logging is enabled, this might impact performance! Unset DB_VERBOSE to disable.`)}`);
    if (synchronizeInsteadOfMigrations) {
        console.log(`[Database] ${(0, picocolors_1.red)(`Unsafe database upgrades are enabled! We are not responsible for broken databases! Unset DB_UNSAFE to disable.`)}`);
    }
    else if (!migrationsExist) {
        console.log(`[Database] ${(0, picocolors_1.red)(`Database engine not supported! Set UNSAFE_DB to bypass.`)}`);
        console.log(`[Database] ${(0, picocolors_1.red)(`Please mention this to Fosscord developers, and provide this info:`)}`);
        console.log(`[Database]\n${(0, picocolors_1.red)(JSON.stringify({
            db_type: type,
            migrations_exist: migrationsExist
        }, null, 4))}`);
        if (!("DB_MIGRATE" in process.env))
            (0, process_1.exit)(1);
    }
    console.log(`[Database] ${(0, picocolors_1.yellow)(`Configuring data source to use ${type} database...`)}`);
    return {
        type,
        charset: "utf8mb4",
        url: isSqlite ? undefined : dbConnectionString,
        database: isSqlite ? dbConnectionString : undefined,
        // @ts-ignore
        //entities: Object.values(Models).filter((x) => x.constructor.name !== "Object" && x.constructor.name !== "Array" && x.constructor.name !== "BigInt" && x).map(x=>x.name),
        entities: Object.values(Models).filter((x) => x.constructor.name == "Function" && shouldIncludeEntity(x.name)),
        synchronize: synchronizeInsteadOfMigrations,
        logging: verboseDb ? "all" : false,
        cache: {
            duration: 1000 * 3 // cache all find queries for 3 seconds
        },
        bigNumberStrings: false,
        supportBigNumbers: true,
        name: "default",
        migrations: synchronizeInsteadOfMigrations ? [] : [path_1.default.join(__dirname, "..", "migrations", type, "*.js")],
        migrationsRun: !synchronizeInsteadOfMigrations,
        applicationName: `Fosscord Server`
    };
}
function shouldIncludeEntity(name) {
    return ![entities_1.BaseClassWithoutId, typeorm_1.PrimaryColumn, entities_1.BaseClass, typeorm_1.PrimaryGeneratedColumn].map((x) => x.name).includes(name);
}
exports.default = dataSource = new typeorm_1.DataSource(getDataSourceOptions());
//# sourceMappingURL=Database.js.map