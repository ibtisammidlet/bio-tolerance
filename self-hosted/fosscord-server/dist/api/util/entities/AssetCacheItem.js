"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetCacheItem = void 0;
class AssetCacheItem {
    Key;
    FilePath;
    Headers;
    constructor(Key, FilePath = "", Headers = null) {
        this.Key = Key;
        this.FilePath = FilePath;
        this.Headers = Headers;
    }
}
exports.AssetCacheItem = AssetCacheItem;
//# sourceMappingURL=AssetCacheItem.js.map