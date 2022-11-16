"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimit = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
let RateLimit = class RateLimit extends BaseClass_1.BaseClass {
    executor_id;
    hits;
    blocked;
    expires_at;
};
tslib_1.__decorate([
    (0, typeorm_1.Column)() // no relation as it also
    ,
    tslib_1.__metadata("design:type", String)
], RateLimit.prototype, "executor_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], RateLimit.prototype, "hits", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], RateLimit.prototype, "blocked", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], RateLimit.prototype, "expires_at", void 0);
RateLimit = tslib_1.__decorate([
    (0, typeorm_1.Entity)("rate_limits")
], RateLimit);
exports.RateLimit = RateLimit;
//# sourceMappingURL=RateLimit.js.map