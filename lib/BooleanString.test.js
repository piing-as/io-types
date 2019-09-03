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
const Either_1 = require("fp-ts/lib/Either");
const BooleanString_1 = require("./BooleanString");
describe("types/BooleanString", () => {
    describe("decode", () => {
        it("should decode strings that are valid booleans only", () => {
            const values = [
                ["true", true],
                ["false", false]
            ];
            for (const [iovalue, expected] of values) {
                const decoded = BooleanString_1.BooleanString.decode(iovalue);
                if (Either_1.isRight(decoded)) {
                    assert.equal(decoded.right, expected);
                }
                else {
                    assert.fail(`could not decode ${decoded.left}`);
                }
            }
        });
        it("should fail on invalid boolean strings", () => {
            const values = [
                "trues", "falses", "yes", "no", "", "null"
            ];
            for (const value of values) {
                const decoded = BooleanString_1.BooleanString.decode(value);
                if (!Either_1.isLeft(decoded)) {
                    console.error(`could decode invalid value: ${value}, decoded: ${decoded.right}`);
                    assert.fail(`could decode invalid value: ${value}, decoded: ${decoded.right}`);
                }
            }
        });
    });
});
