"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const FileStorage_1 = require("./FileStorage");
//import fse from "fs-extra";
const client_s3_1 = require("@aws-sdk/client-s3");
const fs_1 = tslib_1.__importDefault(require("fs"));
const picocolors_1 = require("picocolors");
const S3Storage_1 = require("./S3Storage");
process.cwd();
let storage;
exports.storage = storage;
if (process.env.STORAGE_PROVIDER === "file" || !process.env.STORAGE_PROVIDER) {
    let location = process.env.STORAGE_LOCATION;
    if (location) {
        location = path_1.default.resolve(location);
    }
    else {
        location = path_1.default.join(process.cwd(), "files");
    }
    console.log(`[CDN] storage location: ${(0, picocolors_1.bgCyan)(`${(0, picocolors_1.black)(location)}`)}`);
    //fse.ensureDirSync(location);
    fs_1.default.mkdirSync(location, { recursive: true });
    process.env.STORAGE_LOCATION = location;
    exports.storage = storage = new FileStorage_1.FileStorage();
}
else if (process.env.STORAGE_PROVIDER === "s3") {
    const region = process.env.STORAGE_REGION, bucket = process.env.STORAGE_BUCKET;
    if (!region) {
        console.error(`[CDN] You must provide a region when using the S3 storage provider.`);
        process.exit(1);
    }
    if (!bucket) {
        console.error(`[CDN] You must provide a bucket when using the S3 storage provider.`);
        process.exit(1);
    }
    // in the S3 provider, this should be the root path in the bucket
    let location = process.env.STORAGE_LOCATION;
    if (!location) {
        console.warn(`[CDN] STORAGE_LOCATION unconfigured for S3 provider, defaulting to the bucket root...`);
        location = undefined;
    }
    const client = new client_s3_1.S3({ region });
    exports.storage = storage = new S3Storage_1.S3Storage(client, bucket, location);
}
//# sourceMappingURL=Storage.js.map