"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationTokens1663440589234 = void 0;
class registrationTokens1663440589234 {
    name = "registrationTokens1663440589234";
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE \`valid_registration_tokens\` (
                \`id\` varchar(255) NOT NULL,
                \`token\` varchar(255) NOT NULL,
                \`created_at\` datetime NOT NULL,
                \`expires_at\` datetime NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`notes\`
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`notes\` text NOT NULL
        `);
        await queryRunner.query(`
            DROP TABLE \`valid_registration_tokens\`
        `);
    }
}
exports.registrationTokens1663440589234 = registrationTokens1663440589234;
//# sourceMappingURL=1663440589234-registration_tokens.js.map