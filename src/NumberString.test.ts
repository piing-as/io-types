import * as mocha from "mocha";
import * as assert from "assert";
import { isRight, isLeft } from "fp-ts/lib/Either";

import { NumberString } from "./NumberString";

describe("types/NumberString", () => {

  describe("decode", () => {

    it("should decode strings that are valid numbers only", () => {
      const values = [
        "1", "0", "1.123123", "-1", "0", "-2.233"
      ]

      for(const value of values) {
        const decoded = NumberString.decode(value);
        if(isRight(decoded)) {
          assert.equal(decoded.right, value)
        } else {
          assert.fail(`could not decode ${decoded.left}`)
        }
      }
    })

    it("should accept valid numbers", () => {
      const values = [
        1, 0, 1.123123, -1, 0, -2.233
      ]

      for(const value of values) {
        const decoded = NumberString.decode(value);
        if(isRight(decoded)) {
          assert.equal(decoded.right, value)
        } else {
          assert.fail(`could not decode ${decoded.left}`)
        }
      }
    })

    it("should invalidate non compliant strings", () => {
      const values = [
        "", "abc", "a1", "1a", false, true, undefined, null
      ]
      for(const value of values) {
        const decoded = NumberString.decode(value);
        if(!isLeft(decoded))
          assert.fail(`could not decode ${decoded}`)
      }
    })
  })

})