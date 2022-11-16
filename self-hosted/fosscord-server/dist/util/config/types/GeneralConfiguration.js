"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralConfiguration = void 0;
const util_1 = require("../../util");
class GeneralConfiguration {
    instanceName = "Fosscord Instance";
    instanceDescription = "This is a Fosscord instance made in the pre-release days";
    publicUrl = "http://localhost:3001";
    frontPage = null;
    tosPage = null;
    correspondenceEmail = "noreply@localhost.local";
    correspondenceUserID = null;
    image = null;
    instanceId = util_1.Snowflake.generate();
}
exports.GeneralConfiguration = GeneralConfiguration;
//# sourceMappingURL=GeneralConfiguration.js.map