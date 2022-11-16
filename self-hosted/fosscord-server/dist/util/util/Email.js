"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustEmail = exports.EMAIL_REGEX = void 0;
exports.EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function adjustEmail(email) {
    if (!email)
        return email;
    // body parser already checked if it is a valid email
    const parts = email.match(exports.EMAIL_REGEX);
    // @ts-ignore
    if (!parts || parts.length < 5)
        return undefined;
    const domain = parts[5];
    const user = parts[1];
    // TODO: check accounts with uncommon email domains
    if (domain === "gmail.com" || domain === "googlemail.com") {
        // replace .dots and +alternatives -> Gmail Dot Trick https://support.google.com/mail/answer/7436150 and https://generator.email/blog/gmail-generator
        let v = user.replace(/[.]|(\+.*)/g, "") + "@gmail.com";
    }
    if (domain === "google.com") {
        // replace .dots and +alternatives -> Google Staff GMail Dot Trick
        let v = user.replace(/[.]|(\+.*)/g, "") + "@google.com";
    }
    return email;
}
exports.adjustEmail = adjustEmail;
//# sourceMappingURL=Email.js.map