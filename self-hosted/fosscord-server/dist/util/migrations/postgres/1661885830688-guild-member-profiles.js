"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildMemberProfiles1661885830688 = void 0;
class guildMemberProfiles1661885830688 {
    name = "guildMemberProfiles1661885830688";
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "avatar" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "banner" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "bio" character varying NOT NULL default ''
        `);
        await queryRunner.query(`
            ALTER TABLE "members"
            ADD "communication_disabled_until" TIMESTAMP
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "communication_disabled_until"
        `);
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "bio"
        `);
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "banner"
        `);
        await queryRunner.query(`
            ALTER TABLE "members" DROP COLUMN "avatar"
        `);
    }
}
exports.guildMemberProfiles1661885830688 = guildMemberProfiles1661885830688;
//# sourceMappingURL=1661885830688-guild-member-profiles.js.map