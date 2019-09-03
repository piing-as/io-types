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
const URL_1 = require("./URL");
describe("types/URL", () => {
    describe("decode", () => {
        it("should decode valid urls only", () => {
            assert.ok(Either_1.isRight(URL_1.URL.decode("http://lol.com")));
            assert.ok(Either_1.isRight(URL_1.URL.decode("https://lol.no")));
            assert.ok(Either_1.isRight(URL_1.URL.decode("http://www.lol.com")));
            assert.ok(Either_1.isLeft(URL_1.URL.decode("lol.com")));
            assert.ok(Either_1.isLeft(URL_1.URL.decode("https:/lol.no")));
            assert.ok(Either_1.isLeft(URL_1.URL.decode("//www.lol.com")));
        });
    });
});
