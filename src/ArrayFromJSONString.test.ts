import * as mocha from "mocha";
import * as assert from "assert";
import * as io from "io-ts";
import { Right, Left, isRight, isLeft } from "fp-ts/lib/Either";
import { ArrayFromJSONString } from "./ArrayFromJSONString";

describe("types/ArrayFromJSONString", () => {

	const JSONNumberArray = ArrayFromJSONString<number>(io.number);
	const JSONStringArray = ArrayFromJSONString<string>(io.string);

	describe("decode", () => {
		
		it("should decode valid json", () => {
			const decodednumbers = JSONNumberArray.decode("[1,2,3]");
			assert.ok(isRight(decodednumbers));
			assert.deepEqual(isRight(decodednumbers) ? decodednumbers.right : null, [1,2,3]);
			const decodedStrings = JSONStringArray.decode(`["foo", "bar"]`);
			assert.ok(isRight(decodedStrings));
			assert.deepEqual(isRight(decodedStrings) ? decodedStrings.right : null, ["foo","bar"]);
		});

	});

});