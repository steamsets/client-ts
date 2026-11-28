# Unit

age: seconds since something happened, as of now; seconds: a fixed duration; count

## Example Usage

```typescript
import { Unit } from "@steamsets/client-ts/models/components";

let value: Unit = "count";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"age" | "seconds" | "count" | Unrecognized<string>
```