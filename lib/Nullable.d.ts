import * as io from "io-ts";
export declare const Nullable: <C extends io.Mixed>(codec: C) => io.UnionC<[io.UndefinedC, io.NullC, C]>;
