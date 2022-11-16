"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorage = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = require("path");
const stream_1 = require("stream");
//import ExifTransformer = require("exif-be-gone");
const exif_be_gone_1 = tslib_1.__importDefault(require("exif-be-gone"));
// TODO: split stored files into separate folders named after cloned route
function getPath(path) {
    // STORAGE_LOCATION has a default value in start.ts
    const root = process.env.STORAGE_LOCATION || "../";
    let filename = (0, path_1.join)(root, path);
    if (path.indexOf("\0") !== -1 || !filename.startsWith(root))
        throw new Error("invalid path");
    return filename;
}
class FileStorage {
    async get(path) {
        path = getPath(path);
        try {
            return fs_1.default.readFileSync(path);
        }
        catch (error) {
            try {
                const files = fs_1.default.readdirSync(path);
                if (!files.length)
                    return null;
                return fs_1.default.readFileSync((0, path_1.join)(path, files[0]));
            }
            catch (error) {
                return null;
            }
        }
    }
    async set(path, value) {
        path = getPath(path);
        //fse.ensureDirSync(dirname(path));
        fs_1.default.mkdirSync((0, path_1.dirname)(path), { recursive: true });
        value = stream_1.Readable.from(value);
        const cleaned_file = fs_1.default.createWriteStream(path);
        return value.pipe(new exif_be_gone_1.default()).pipe(cleaned_file);
    }
    async delete(path) {
        //TODO we should delete the parent directory if empty
        fs_1.default.unlinkSync(getPath(path));
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=FileStorage.js.map