# @piing/io-types

A sellection of essential io-ts types for decoding io like url queries and such.

## Install
```bash
npm i @piing/io-types
```

### Examples

```typescript

import * as io from "io-ts"

import { ArrayFromJSONString } from "@piing/io-types/lib/ArrayFromJSONString"
import { Nullable } from "@piing/io-types/lib/Nullable"
import { YesNoBool } from "@piing/io-types/lib/YesNoBool"


const JSONNumberArray = ArrayFromJSONString(io.number);
const JSONStringArray = ArrayFromJSONString(io.string);

JSONNumberArray.decode("[1,2,3]") // right [1,2,3]
JSONStringArray.decode(`["foo", "bar"]`) // right ["foo", "bar"]


const NullableNumber = Nullable(io.number)

NullableNumber.decode(null) // right null
NullableNumber.decode(1) // right 1


YesNoBool.decode("yes") // right true
YesNoBool.decode("no") // right false

```

