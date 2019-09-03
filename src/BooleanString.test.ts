import * as mocha from "mocha";
import * as assert from "assert";
import { isRight, isLeft } from "fp-ts/lib/Either";

import { BooleanString } from "./BooleanString";

describe("types/BooleanString", () => {

  describe("decode", () => {

    it("should decode strings that are valid booleans only", () => {
      const values = [
        ["true", true],
        ["false", false]
      ]

      for(const [iovalue, expected] of values) {
        const decoded = BooleanString.decode(iovalue);
        if(isRight(decoded)) {
          assert.equal(decoded.right, expected)
        } else {
          assert.fail(`could not decode ${decoded.left}`)
        }
      }
    })

    it("should fail on invalid boolean strings", () => {
      const values = [
        "trues", "falses", "yes", "no", "", "null"
      ]

      for(const value of values) {
        const decoded = BooleanString.decode(value);
        if(!isLeft(decoded)) {
          console.error(`could decode invalid value: ${value}, decoded: ${decoded.right}`)
          assert.fail(`could decode invalid value: ${value}, decoded: ${decoded.right}`)
        }
      }
    })

  })
})