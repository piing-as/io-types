"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const array = __importStar(require("fp-ts/lib/Array"));
const pipeable_1 = require("fp-ts/lib/pipeable");
const Either_1 = require("fp-ts/lib/Either");
const Option_1 = require("fp-ts/lib/Option");
const jsToString = (value) => (value === undefined ? "undefined" : JSON.stringify(value));
exports.formatValidationError = (error, opts) => {
    const path = error.context
        .map((c) => c.key)
        // The context entry with an empty key is the original type ("default
        // context"), not an type error.
        .filter((key) => key.length > 0)
        .join(".");
    // The actual error is last in context
    const maybeErrorContext = array.last(
    // https://github.com/gcanti/fp-ts/pull/544/files
    error.context);
    return Option_1.option.map(maybeErrorContext, (errorContext) => {
        const expectedType = errorContext.type.name;
        return (`Expecting ${expectedType}`
            + (path === "" ? "" : ` at ${path}`)
            + ` but instead got: ${opts && opts.sensitiveValues ? "*REDACTED*" : jsToString(error.value)}.`);
    });
};
exports.report = (validation, opts) => (pipeable_1.pipe(validation, Either_1.fold((errors) => array.compact(errors.map((v) => exports.formatValidationError(v, opts))), () => [])));
