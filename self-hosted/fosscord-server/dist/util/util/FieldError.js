"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldError = exports.FieldErrors = void 0;
function FieldErrors(fields) {
    return new FieldError(50035, "Invalid Form Body", fields.map(({ message, code }) => ({
        _errors: [
            {
                message,
                code: code || "BASE_TYPE_INVALID"
            }
        ]
    })));
}
exports.FieldErrors = FieldErrors;
// TODO: implement Image data type: Data URI scheme that supports JPG, GIF, and PNG formats. An example Data URI format is: data:image/jpeg;base64,BASE64_ENCODED_JPEG_IMAGE_DATA
// Ensure you use the proper content type (image/jpeg, image/png, image/gif) that matches the image data being provided.
class FieldError extends Error {
    code;
    message;
    errors;
    constructor(code, message, errors) {
        super(message);
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
}
exports.FieldError = FieldError;
//# sourceMappingURL=FieldError.js.map