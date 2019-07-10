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
const YesNoBool_1 = require("./YesNoBool");
describe("types/YesNoBool", () => {
    describe("decode", () => {
        it("should decode yes|YES and no|NO into Either.Right<Boolean>", () => {
            const valuepairs = [
                ["yes", true],
                ["YES", true],
                ["no", false],
                ["NO", false],
            ];
            for (const valuepair of valuepairs) {
                const decoded = YesNoBool_1.YesNoBool.decode(valuepair[0]);
                if (!Either_1.isRight(decoded))
                    assert.fail(`could not decode ${decoded}`);
                else
                    assert.equal(decoded.right, valuepair[1]);
            }
            assert.ok(Either_1.isLeft(YesNoBool_1.YesNoBool.decode("truee")));
            assert.ok(Either_1.isLeft(YesNoBool_1.YesNoBool.decode("true")));
            assert.ok(Either_1.isLeft(YesNoBool_1.YesNoBool.decode("false")));
            assert.ok(Either_1.isLeft(YesNoBool_1.YesNoBool.decode("FALSE")));
        });
    });
});
