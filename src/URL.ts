import * as io from "io-ts";

export const URL = new io.Type<string, string, unknown>(
  'URL',
  io.string.is,
  (s, c) => {
    if(typeof s !== "string")
      return io.failure('', c)
    const match = s.match(regexp)
    return !match ? io.failure('', c) : io.success(s)
  },
  String
)

const regexp = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/