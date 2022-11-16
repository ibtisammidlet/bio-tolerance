"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildMemberProfiles1661885910534 = void 0;
class guildMemberProfiles1661885910534 {
    name = "guildMemberProfiles1661885910534";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`avatar\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`banner\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`bio\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\`
            ADD \`communication_disabled_until\` datetime NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`communication_disabled_until\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`bio\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`banner\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`members\` DROP COLUMN \`avatar\`
        `);
    }
}
exports.guildMemberProfiles1661885910534 = guildMemberProfiles1661885910534;
//# sourceMappingURL=1661885910534-guild-member-profiles.js.map