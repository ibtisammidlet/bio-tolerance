"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidRegistrationToken = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const __1 = require("..");
let ValidRegistrationToken = class ValidRegistrationToken extends typeorm_1.BaseEntity {
    token;
    created_at = new Date();
    expires_at = new Date(Date.now() + __1.Config.get().security.defaultRegistrationTokenExpiration);
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], ValidRegistrationToken.prototype, "token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], ValidRegistrationToken.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], ValidRegistrationToken.prototype, "expires_at", void 0);
ValidRegistrationToken = tslib_1.__decorate([
    (0, typeorm_1.Entity)("valid_registration_tokens")
], ValidRegistrationToken);
exports.ValidRegistrationToken = ValidRegistrationToken;
//# sourceMappingURL=ValidRegistrationTokens.js.map