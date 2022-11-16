"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeCleanup51660265907544 = void 0;
class CodeCleanup51660265907544 {
    name = "CodeCleanup51660265907544";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "channels"
            ADD "flags" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "channels"
            ADD "default_thread_rate_limit_per_user" integer
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "channels" DROP COLUMN "default_thread_rate_limit_per_user"
        `);
        await queryRunner.query(`
            ALTER TABLE "channels" DROP COLUMN "flags"
        `);
    }
}
exports.CodeCleanup51660265907544 = CodeCleanup51660265907544;
//# sourceMappingURL=1660265907544-CodeCleanup5.js.map