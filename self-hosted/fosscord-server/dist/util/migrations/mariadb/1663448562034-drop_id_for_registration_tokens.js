"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropIdForRegistrationTokens1663448562034 = void 0;
class dropIdForRegistrationTokens1663448562034 {
    name = "dropIdForRegistrationTokens1663448562034";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\` DROP PRIMARY KEY
        `);
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\` DROP COLUMN \`id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\`
            ADD PRIMARY KEY (\`token\`)
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\` DROP PRIMARY KEY
        `);
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\`
            ADD \`id\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`valid_registration_tokens\`
            ADD PRIMARY KEY (\`id\`)
        `);
    }
}
exports.dropIdForRegistrationTokens1663448562034 = dropIdForRegistrationTokens1663448562034;
//# sourceMappingURL=1663448562034-drop_id_for_registration_tokens.js.map