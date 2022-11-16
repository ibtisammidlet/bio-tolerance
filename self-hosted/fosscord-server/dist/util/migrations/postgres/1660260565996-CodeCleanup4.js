"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeCleanup41660260565996 = void 0;
class CodeCleanup41660260565996 {
    name = "CodeCleanup41660260565996";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "settingsId" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_76ba283779c8441fd5ff819c8cf" UNIQUE ("settingsId")
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "FK_76ba283779c8441fd5ff819c8cf" FOREIGN KEY ("settingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "FK_76ba283779c8441fd5ff819c8cf"
        `);
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_76ba283779c8441fd5ff819c8cf"
        `);
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "settingsId"
        `);
    }
}
exports.CodeCleanup41660260565996 = CodeCleanup41660260565996;
//# sourceMappingURL=1660260565996-CodeCleanup4.js.map