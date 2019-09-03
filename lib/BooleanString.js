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
const Either_1 = require("fp-ts/lib/Either");
exports.BooleanString = new io.Type('BooleanString', io.boolean.is, (u, c) => Either_1.either.chain(io.string.validate(u, c), (s) => {
    try {
        const bool = JSON.parse(s);
        if (typeof bool === "boolean")
            return io.success(bool);
    }
    catch (error) {
        return io.failure(u, c, 'cannot parse to a number');
    }
    return io.failure(u, c, 'cannot parse to a number');
}), String);
