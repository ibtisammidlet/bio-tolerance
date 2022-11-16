"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyParamsToString = exports.ApiError = void 0;
class ApiError extends Error {
    message;
    code;
    httpStatus;
    defaultParams;
    constructor(message, code, httpStatus = 400, defaultParams) {
        super(message);
        this.message = message;
        this.code = code;
        this.httpStatus = httpStatus;
        this.defaultParams = defaultParams;
    }
    withDefaultParams() {
        if (this.defaultParams)
            return new ApiError(applyParamsToString(this.message, this.defaultParams), this.code, this.httpStatus);
        return this;
    }
    withParams(...params) {
        return new ApiError(applyParamsToString(this.message, params), this.code, this.httpStatus);
    }
}
exports.ApiError = ApiError;
function applyParamsToString(s, params) {
    let newString = s;
    params.forEach((a) => {
        newString = newString.replace("{}", "" + a);
    });
    return newString;
}
exports.applyParamsToString = applyParamsToString;
//# sourceMappingURL=ApiError.js.map