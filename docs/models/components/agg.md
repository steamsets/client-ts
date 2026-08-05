# Agg

How to aggregate Y inside each X bucket.

## Example Usage

```typescript
import { Agg } from "@steamsets/client-ts/models/components";

let value: Agg = "avg";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"avg" | "median" | "count" | Unrecognized<string>
```