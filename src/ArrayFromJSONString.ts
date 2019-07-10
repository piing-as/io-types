import { string, Type, Array, failure, success } from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { either, isLeft } from "fp-ts/lib/Either";

export const ArrayFromJSONString = <A> (fa: Type<A, unknown>) => new Type<A[], unknown, unknown>(
	"ArrayFromJSONString",
	(u): u is A[] => Array.is(u),
	(u, c) =>
		either.chain(string.validate(u, c), s => {
			try {
				const input = JSON.parse(s);
				let out: A[] = [];
				for(const item of input) {
					const decoded = fa.decode(item);
					if(isLeft(decoded))
						return failure(s, c, PathReporter.report(decoded).join(","));
					out = [...out, decoded.right];
				}
				return success(out);
			} catch(error) {
				return failure(s, c, "invalid JSON");
			}
		}),
	String
);