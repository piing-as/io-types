import * as mocha from "mocha";
import * as assert from "assert";
import * as io from "io-ts"
import { isRight } from "fp-ts/lib/Either";

import { Nullable } from "./Nullable";

describe("types/Nullable", () => {

  const nullableTypes: {[key:string]: io.Type<any>} = {
    "number": Nullable(io.number),
    "boolean": Nullable(io.boolean),
    "string": Nullable(io.string),
  }

  describe("decode", () => {

    it("should accept convert numbers, strings and booleans corectly", () => {
      const values = [1, true, false, "", "asd"];
      for(const value of values) {
        const decoder = nullableTypes[typeof value]
        const decoded = decoder.decode(value);
        if(isRight(decoded)) {
          assert.equal(decoded.right, value)
        } else {
          assert.fail(`could not decode ${decoded}`)
        }
      }
    })

    it("should accept undefined and null", () => {
      const values = [null, undefined];
      for(const value of values) {
        for(const nullable of Object.values(nullableTypes)) {
          const decoded = nullable.decode(value);
          if(isRight(decoded)) {
            assert.equal(decoded.right, value)
          } else {
            assert.fail(`could not decode ${decoded}`)
          }
        }
      }
    })

  })
})