"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Storage = void 0;
const readableToBuffer = (readable) => new Promise((resolve, reject) => {
    const chunks = [];
    readable.on("data", (chunk) => chunks.push(chunk));
    readable.on("error", reject);
    readable.on("end", () => resolve(Buffer.concat(chunks)));
});
class S3Storage {
    client;
    bucket;
    basePath;
    constructor(client, bucket, basePath) {
        this.client = client;
        this.bucket = bucket;
        this.basePath = basePath;
    }
    /**
     * Always return a string, to ensure consistency.
     */
    get bucketBasePath() {
        return this.basePath ?? "";
    }
    async set(path, data) {
        await this.client.putObject({
            Bucket: this.bucket,
            Key: `${this.bucketBasePath}${path}`,
            Body: data
        });
    }
    async get(path) {
        try {
            const s3Object = await this.client.getObject({
                Bucket: this.bucket,
                Key: `${this.bucketBasePath ?? ""}${path}`
            });
            if (!s3Object.Body)
                return null;
            const body = s3Object.Body;
            return await readableToBuffer(body);
        }
        catch (err) {
            console.error(`[CDN] Unable to get S3 object at path ${path}.`);
            console.error(err);
            return null;
        }
    }
    async delete(path) {
        await this.client.deleteObject({
            Bucket: this.bucket,
            Key: `${this.bucketBasePath}${path}`
        });
    }
}
exports.S3Storage = S3Storage;
//# sourceMappingURL=S3Storage.js.map