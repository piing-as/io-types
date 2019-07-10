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
exports.YesNoBool = new io.Type('YesNoBool', (u) => typeof u === "boolean", (u, c) => {
    const s = io.string.validate(u, c);
    if (Either_1.isLeft(s))
        return io.failure(u, c);
    const yesNoLowercased = s.right.toLocaleLowerCase();
    if (yesNoLowercased === "yes")
        return io.success(true);
    if (yesNoLowercased === "no")
        return io.success(false);
    else
        return io.failure(u, c, `yes|no boolean cannot be: ${yesNoLowercased}`);
}, a => a ? "yes" : "no");
