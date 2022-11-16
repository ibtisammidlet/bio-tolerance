"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeCleanup31660258372154 = void 0;
class CodeCleanup31660258372154 {
    name = "CodeCleanup31660258372154";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "settings"
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "settings" text NOT NULL
        `);
    }
}
exports.CodeCleanup31660258372154 = CodeCleanup31660258372154;
//# sourceMappingURL=1660258372154-CodeCleanup3.js.map