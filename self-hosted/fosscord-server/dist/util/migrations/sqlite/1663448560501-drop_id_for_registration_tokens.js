"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropIdForRegistrationTokens1663448560501 = void 0;
class dropIdForRegistrationTokens1663448560501 {
    name = "dropIdForRegistrationTokens1663448560501";
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "temporary_valid_registration_tokens" (
                "token" varchar NOT NULL,
                "created_at" datetime NOT NULL,
                "expires_at" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_valid_registration_tokens"("token", "created_at", "expires_at")
            SELECT "token",
                "created_at",
                "expires_at"
            FROM "valid_registration_tokens"
        `);
        await queryRunner.query(`
            DROP TABLE "valid_registration_tokens"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_valid_registration_tokens"
                RENAME TO "valid_registration_tokens"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_valid_registration_tokens" (
                "token" varchar PRIMARY KEY NOT NULL,
                "created_at" datetime NOT NULL,
                "expires_at" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_valid_registration_tokens"("token", "created_at", "expires_at")
            SELECT "token",
                "created_at",
                "expires_at"
            FROM "valid_registration_tokens"
        `);
        await queryRunner.query(`
            DROP TABLE "valid_registration_tokens"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_valid_registration_tokens"
                RENAME TO "valid_registration_tokens"
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens"
                RENAME TO "temporary_valid_registration_tokens"
        `);
        await queryRunner.query(`
            CREATE TABLE "valid_registration_tokens" (
                "token" varchar NOT NULL,
                "created_at" datetime NOT NULL,
                "expires_at" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "valid_registration_tokens"("token", "created_at", "expires_at")
            SELECT "token",
                "created_at",
                "expires_at"
            FROM "temporary_valid_registration_tokens"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_valid_registration_tokens"
        `);
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens"
                RENAME TO "temporary_valid_registration_tokens"
        `);
        await queryRunner.query(`
            CREATE TABLE "valid_registration_tokens" (
                "id" varchar PRIMARY KEY NOT NULL,
                "token" varchar NOT NULL,
                "created_at" datetime NOT NULL,
                "expires_at" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "valid_registration_tokens"("token", "created_at", "expires_at")
            SELECT "token",
                "created_at",
                "expires_at"
            FROM "temporary_valid_registration_tokens"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_valid_registration_tokens"
        `);
    }
}
exports.dropIdForRegistrationTokens1663448560501 = dropIdForRegistrationTokens1663448560501;
//# sourceMappingURL=1663448560501-drop_id_for_registration_tokens.js.map