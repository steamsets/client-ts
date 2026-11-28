# Split

What the rows are split by besides the value; nothing when empty

## Example Usage

```typescript
import { Split } from "@steamsets/client-ts/models/components";

let value: Split = "week";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"route" | "week" | "day" | "country" | "device" | Unrecognized<string>
```