import * as mocha from "mocha";
import * as assert from "assert";
import { isLeft, isRight } from "fp-ts/lib/Either";

import { URL } from "./URL";

describe("types/URL", () => {

  describe("decode", () => {

    it("should decode valid urls only", () => {
  
      assert.ok(isRight(URL.decode("http://lol.com")));
      assert.ok(isRight(URL.decode("https://lol.no")));
      assert.ok(isRight(URL.decode("http://www.lol.com")));

      assert.ok(isLeft(URL.decode("lol.com")));
      assert.ok(isLeft(URL.decode("https:/lol.no")));
      assert.ok(isLeft(URL.decode("//www.lol.com")));

    })

  })

})