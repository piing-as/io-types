# @piing/io-types

A sellection of essential io-ts types for decoding io like url queries and such.

### Examples

```typescript

import * as io from "io-ts"

import {ArrayFromJSONString} from "@piing/io-types/lib/ArrayFromJSONString"
import {NullableNumber} from "@piing/io-types/lib/NullableNumber"
import {YesNoBool} from "@piing/io-types/lib/YesNoBool"


const JSONNumberArray = ArrayFromJSONString<number>(io.number);
const JSONStringArray = ArrayFromJSONString<string>(io.string);

JSONNumberArray.decode("[1,2,3]") // right [1,2,3]
JSONStringArray.decode(`["foo", "bar"]`) // right ["foo", "bar"]


const NullableNumber = Nullable(io.number)

NullableNumber.decode(null) // right null
NullableNumber.decode(1) // right 1


YesNoBool.decode("yes") // right true
YesNoBool.decode("no") // right false

```

