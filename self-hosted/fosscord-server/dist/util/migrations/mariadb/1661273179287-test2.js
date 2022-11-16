"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test21661273179287 = void 0;
class test21661273179287 {
    name = "test21661273179287";
    async up(queryRunner) {
        await queryRunner.query(`
            DROP INDEX \`IDX_76ba283779c8441fd5ff819c8c\` ON \`users\`
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_76ba283779c8441fd5ff819c8c\` ON \`users\` (\`settingsId\`)
        `);
    }
}
exports.test21661273179287 = test21661273179287;
//# sourceMappingURL=1661273179287-test2.js.map