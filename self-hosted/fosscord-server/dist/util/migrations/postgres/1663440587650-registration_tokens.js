"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationTokens1663440587650 = void 0;
class registrationTokens1663440587650 {
    name = "registrationTokens1663440587650";
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "valid_registration_tokens" (
                "id" character varying NOT NULL,
                "token" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL,
                "expires_at" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_aac42a46cd46369450217de1c8a" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ALTER COLUMN "bio" DROP DEFAULT
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "members"
            ALTER COLUMN "bio"
            SET DEFAULT ''
        `);
        await queryRunner.query(`
            DROP TABLE "valid_registration_tokens"
        `);
    }
}
exports.registrationTokens1663440587650 = registrationTokens1663440587650;
//# sourceMappingURL=1663440587650-registration_tokens.js.map