import * as io from "io-ts";
import { isNull } from "util";

export const NumberFromString = new io.Type<number, string, unknown>(
  'NumberFromString',
  io.number.is,
  (s, c) => {
    if(typeof s === "string" && s === "")
      return io.failure(s, c, "number string cannot be empty")
    if(typeof s === "boolean")
      return io.failure(s, c, "number string cannot be boolean")
    if(typeof s === "undefined")
      return io.failure(s, c, "number string cannot undefined")
    if(isNull(s))
      return io.failure(s, c, "number string cannot null")
    const n = Number(s)
    return isNaN(n) ? io.failure(s, c) : io.success(n)
  },
  String
)