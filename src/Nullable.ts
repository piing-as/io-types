
import * as io from "io-ts";

export const Nullable = <C extends io.Mixed>(codec: C) => io.union([
	io.undefined,
	io.null,
	codec
])