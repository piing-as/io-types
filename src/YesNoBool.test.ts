import * as mocha from "mocha";
import * as assert from "assert";
import { isLeft, isRight } from "fp-ts/lib/Either";

import { YesNoBool } from "./YesNoBool";

describe("types/YesNoBool", () => {

  describe("decode", () => {

    it("should decode yes|YES and no|NO into Either.Right<Boolean>", () => {

      const valuepairs: [string, boolean][] = [
        ["yes", true],
        ["YES", true],
        ["no", false],
        ["NO", false],
      ]

      for(const valuepair of valuepairs) {
        const decoded = YesNoBool.decode(valuepair[0]);
        if(!isRight(decoded))
          assert.fail(`could not decode ${decoded}`)
        else
          assert.equal(decoded.right, valuepair[1])
      }
  
      assert.ok(isLeft(YesNoBool.decode("truee")));
      assert.ok(isLeft(YesNoBool.decode("true")));
      assert.ok(isLeft(YesNoBool.decode("false")));
      assert.ok(isLeft(YesNoBool.decode("FALSE")));
    })

  })

})