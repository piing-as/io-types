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
const NumberFromString_1 = require("./NumberFromString");
describe("types/NumberFromString", () => {
    describe("decode", () => {
        it("should decode strings that are valid numbers only", () => {
            const values = [
                "1", "0", "1.123123", "-1", "0", "-2.233"
            ];
            for (const value of values) {
                const decoded = NumberFromString_1.NumberFromString.decode(value);
                if (Either_1.isRight(decoded)) {
                    assert.equal(decoded.right, value);
                }
                else {
                    assert.fail(`could not decode ${decoded.left}`);
                }
            }
        });
        it("should accept valid numbers", () => {
            const values = [
                1, 0, 1.123123, -1, 0, -2.233
            ];
            for (const value of values) {
                const decoded = NumberFromString_1.NumberFromString.decode(value);
                if (Either_1.isRight(decoded)) {
                    assert.equal(decoded.right, value);
                }
                else {
                    assert.fail(`could not decode ${decoded.left}`);
                }
            }
        });
        it("should invalidate non compliant strings", () => {
            const values = [
                "", "abc", "a1", "1a", false, true, undefined, null
            ];
            for (const value of values) {
                const decoded = NumberFromString_1.NumberFromString.decode(value);
                if (!Either_1.isLeft(decoded))
                    assert.fail(`could not decode ${decoded}`);
            }
        });
    });
});
