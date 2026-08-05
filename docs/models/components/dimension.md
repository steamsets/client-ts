# Dimension

Group rows by this dimension. One bucket per distinct value.

## Example Usage

```typescript
import { Dimension } from "@steamsets/client-ts/models/components";

let value: Dimension = "region";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"country" | "region" | Unrecognized<string>
```