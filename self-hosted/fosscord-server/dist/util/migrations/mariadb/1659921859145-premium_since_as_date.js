"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.premiumSinceAsDate1659921859145 = void 0;
class premiumSinceAsDate1659921859145 {
    name = "premiumSinceAsDate1659921859145";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`premium_since\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`premium_since\` datetime NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`premium_since\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`premium_since\` bigint NULL
        `);
    }
}
exports.premiumSinceAsDate1659921859145 = premiumSinceAsDate1659921859145;
//# sourceMappingURL=1659921859145-premium_since_as_date.js.map