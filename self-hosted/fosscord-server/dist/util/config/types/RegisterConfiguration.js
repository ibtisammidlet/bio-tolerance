"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterConfiguration = void 0;
const _1 = require(".");
class RegisterConfiguration {
    //classes
    email = new _1.EmailConfiguration();
    dateOfBirth = new _1.DateOfBirthConfiguration();
    password = new _1.PasswordConfiguration();
    //base types
    disabled = false;
    requireCaptcha = true;
    requireInvite = false;
    allowGuests = true;
    guestsRequireInvite = true;
    allowNewRegistration = true;
    blockProxies = true;
    incrementingDiscriminators = false; // random otherwise
    defaultRights = "0";
}
exports.RegisterConfiguration = RegisterConfiguration;
//# sourceMappingURL=RegisterConfiguration.js.map