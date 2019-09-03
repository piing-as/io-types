import * as mocha from "mocha";
import * as assert from "assert";
import * as io from "io-ts";
import { isRight } from "fp-ts/lib/Either";
import { JSONStringArray } from "./JSONStringArray";

describe("types/JSONStringArray", () => {

	const jsonNumberArray = JSONStringArray(io.number);
	const jsonStringArray = JSONStringArray(io.string);

	describe("decode", () => {
		
		it("should decode valid json", () => {
			const decodednumbers = jsonNumberArray.decode("[1,2,3]");
			assert.ok(isRight(decodednumbers));
			assert.deepEqual(isRight(decodednumbers) ? decodednumbers.right : null, [1,2,3]);
			const decodedStrings = jsonStringArray.decode(`["foo", "bar"]`);
			assert.ok(isRight(decodedStrings));
			assert.deepEqual(isRight(decodedStrings) ? decodedStrings.right : null, ["foo","bar"]);
		});

	});

});