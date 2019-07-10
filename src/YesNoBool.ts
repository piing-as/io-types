import * as io from "io-ts";
import { isLeft } from "fp-ts/lib/Either";

export const YesNoBool = new io.Type<boolean, string, unknown>(
  'YesNoBool',
  (u): u is boolean => typeof u === "boolean",
  (u, c) => {
		
		const s = io.string.validate(u, c);

		if(isLeft(s))
			return io.failure(u,c)

		const yesNoLowercased = s.right.toLocaleLowerCase()

		if(yesNoLowercased === "yes")
			return io.success(true)
		if(yesNoLowercased === "no")
			return io.success(false)
		else
			return io.failure(u, c, `yes|no boolean cannot be: ${yesNoLowercased}`)
	},
  a => a ? "yes" : "no"
)

export type TYesNoBool = io.TypeOf<typeof YesNoBool>