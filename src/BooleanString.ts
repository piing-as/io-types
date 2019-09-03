
import * as io from "io-ts";
import { either } from "fp-ts/lib/Either";

export const BooleanString = new io.Type<boolean, string, unknown>(
  'BooleanString',
  io.boolean.is,
  (u, c) =>
    either.chain(io.string.validate(u, c), (s) => {
      try {
        const bool = JSON.parse(s)
        if (typeof bool === "boolean")
          return io.success(bool)
      } catch (error){
        return io.failure(u, c, 'cannot parse to a number')
      }
      return io.failure(u, c, 'cannot parse to a number')
    }),
  String
)