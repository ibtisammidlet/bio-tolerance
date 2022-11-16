"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMfaBackupCodes = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const _1 = require(".");
const BackupCodes_1 = require("../entities/BackupCodes");
function generateMfaBackupCodes(user_id) {
    let backup_codes = [];
    for (let i = 0; i < _1.Config.get().security.mfaBackupCodeCount; i++) {
        const code = BackupCodes_1.BackupCode.create({
            user: { id: user_id },
            code: crypto_1.default.randomBytes(_1.Config.get().security.mfaBackupCodeBytes).toString("hex"),
            consumed: false,
            expired: false
        });
        backup_codes.push(code);
    }
    return backup_codes;
}
exports.generateMfaBackupCodes = generateMfaBackupCodes;
//# sourceMappingURL=MFA.js.map