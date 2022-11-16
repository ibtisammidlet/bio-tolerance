"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.premiumSinceAsDate1659921826567 = void 0;
class premiumSinceAsDate1659921826567 {
    name = "premiumSinceAsDate1659921826567";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "premium_since"
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "premium_since" TIMESTAMP
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "premium_since"
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "premium_since" bigint
        `);
    }
}
exports.premiumSinceAsDate1659921826567 = premiumSinceAsDate1659921826567;
//# sourceMappingURL=1659921826567-premium_since_as_date.js.map