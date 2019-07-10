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
const Nullable_1 = require("./Nullable");
describe("types/Nullable", () => {
    const nullableTypes = {
        "number": Nullable_1.Nullable(io.number),
        "boolean": Nullable_1.Nullable(io.boolean),
        "string": Nullable_1.Nullable(io.string),
    };
    describe("decode", () => {
        it("should accept convert numbers, strings and booleans corectly", () => {
            const values = [1, true, false, "", "asd"];
            for (const value of values) {
                const decoder = nullableTypes[typeof value];
                const decoded = decoder.decode(value);
                if (Either_1.isRight(decoded)) {
                    assert.equal(decoded.right, value);
                }
                else {
                    assert.fail(`could not decode ${decoded}`);
                }
            }
        });
        it("should accept undefined and null", () => {
            const values = [null, undefined];
            for (const value of values) {
                for (const nullable of Object.values(nullableTypes)) {
                    const decoded = nullable.decode(value);
                    if (Either_1.isRight(decoded)) {
                        assert.equal(decoded.right, value);
                    }
                    else {
                        assert.fail(`could not decode ${decoded}`);
                    }
                }
            }
        });
    });
});
