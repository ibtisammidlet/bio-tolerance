"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropIdForRegistrationTokens1663448561249 = void 0;
class dropIdForRegistrationTokens1663448561249 {
    name = "dropIdForRegistrationTokens1663448561249";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens" DROP CONSTRAINT "PK_aac42a46cd46369450217de1c8a"
        `);
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens"
            ADD CONSTRAINT "PK_e0f5c8e3fcefe3134a092c50485" PRIMARY KEY ("token")
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens" DROP CONSTRAINT "PK_e0f5c8e3fcefe3134a092c50485"
        `);
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens"
            ADD "id" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "valid_registration_tokens"
            ADD CONSTRAINT "PK_aac42a46cd46369450217de1c8a" PRIMARY KEY ("id")
        `);
    }
}
exports.dropIdForRegistrationTokens1663448561249 = dropIdForRegistrationTokens1663448561249;
//# sourceMappingURL=1663448561249-drop_id_for_registration_tokens.js.map