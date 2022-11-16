"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitersAreDeletable1660416055566 = void 0;
class InvitersAreDeletable1660416055566 {
    name = "InvitersAreDeletable1660416055566";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "invites" DROP CONSTRAINT "FK_15c35422032e0b22b4ada95f48f"
        `);
        await queryRunner.query(`
            ALTER TABLE "invites"
            ADD CONSTRAINT "FK_15c35422032e0b22b4ada95f48f" FOREIGN KEY ("inviter_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "invites" DROP CONSTRAINT "FK_15c35422032e0b22b4ada95f48f"
        `);
        await queryRunner.query(`
            ALTER TABLE "invites"
            ADD CONSTRAINT "FK_15c35422032e0b22b4ada95f48f" FOREIGN KEY ("inviter_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }
}
exports.InvitersAreDeletable1660416055566 = InvitersAreDeletable1660416055566;
//# sourceMappingURL=1660416055566-InvitersAreDeletable.js.map