"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const io = __importStar(require("io-ts"));
const util_1 = require("util");
exports.NumberFromString = new io.Type('NumberFromString', io.number.is, (s, c) => {
    if (typeof s === "string" && s === "")
        return io.failure(s, c, "number string cannot be empty");
    if (typeof s === "boolean")
        return io.failure(s, c, "number string cannot be boolean");
    if (typeof s === "undefined")
        return io.failure(s, c, "number string cannot undefined");
    if (util_1.isNull(s))
        return io.failure(s, c, "number string cannot null");
    const n = Number(s);
    return isNaN(n) ? io.failure(s, c) : io.success(n);
}, String);
