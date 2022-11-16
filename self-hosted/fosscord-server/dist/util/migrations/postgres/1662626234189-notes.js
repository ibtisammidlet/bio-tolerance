"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notes1662626234189 = void 0;
const typeorm_1 = require("typeorm");
class notes1662626234189 {
    name = 'notes1662626234189';
    async up(queryRunner) {
        await queryRunner.dropColumn("users", "notes");
    }
    async down(queryRunner) {
        await queryRunner.addColumn("users", new typeorm_1.TableColumn({ name: "notes", type: "simple-json" }));
    }
}
exports.notes1662626234189 = notes1662626234189;
//# sourceMappingURL=1662626234189-notes.js.map