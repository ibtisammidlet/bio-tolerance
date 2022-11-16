"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClass = exports.PrimaryIdColumn = exports.BaseClassWithoutId = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Snowflake_1 = require("../util/Snowflake");
class BaseClassWithoutId extends typeorm_1.BaseEntity {
    constructor() {
        super();
    }
}
exports.BaseClassWithoutId = BaseClassWithoutId;
exports.PrimaryIdColumn = process.env.DATABASE?.startsWith("mongodb") ? typeorm_1.ObjectIdColumn : typeorm_1.PrimaryColumn;
class BaseClass extends BaseClassWithoutId {
    id;
    constructor() {
        super();
        if (!this.id)
            this.id = Snowflake_1.Snowflake.generate();
    }
    save(options) {
        if (!this.id)
            this.id = Snowflake_1.Snowflake.generate();
        return super.save(options);
    }
}
tslib_1.__decorate([
    (0, exports.PrimaryIdColumn)(),
    tslib_1.__metadata("design:type", String)
], BaseClass.prototype, "id", void 0);
exports.BaseClass = BaseClass;
//# sourceMappingURL=BaseClass.js.map