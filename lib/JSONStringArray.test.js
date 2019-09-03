"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const io = __importStar(require("io-ts"));
const Either_1 = require("fp-ts/lib/Either");
const JSONStringArray_1 = require("./JSONStringArray");
describe("types/JSONStringArray", () => {
    const jsonNumberArray = JSONStringArray_1.JSONStringArray(io.number);
    const jsonStringArray = JSONStringArray_1.JSONStringArray(io.string);
    describe("decode", () => {
        it("should decode valid json", () => {
            const decodednumbers = jsonNumberArray.decode("[1,2,3]");
            assert.ok(Either_1.isRight(decodednumbers));
            assert.deepEqual(Either_1.isRight(decodednumbers) ? decodednumbers.right : null, [1, 2, 3]);
            const decodedStrings = jsonStringArray.decode(`["foo", "bar"]`);
            assert.ok(Either_1.isRight(decodedStrings));
            assert.deepEqual(Either_1.isRight(decodedStrings) ? decodedStrings.right : null, ["foo", "bar"]);
        });
    });
});
