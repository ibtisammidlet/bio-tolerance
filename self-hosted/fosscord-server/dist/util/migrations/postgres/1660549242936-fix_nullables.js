"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixNullables1660549242936 = void 0;
class fixNullables1660549242936 {
    name = "fixNullables1660549242936";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "bio" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "mfa_enabled" DROP NOT NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "mfa_enabled"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "bio"
            SET NOT NULL
        `);
    }
}
exports.fixNullables1660549242936 = fixNullables1660549242936;
//# sourceMappingURL=1660549242936-fix_nullables.js.map