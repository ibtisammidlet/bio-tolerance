"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfiguration = void 0;
class EmailConfiguration {
    required = false;
    allowlist = false;
    blocklist = true;
    domains = []; // TODO: efficiently save domain blocklist in database
}
exports.EmailConfiguration = EmailConfiguration;
//# sourceMappingURL=Email.js.map