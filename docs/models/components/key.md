# Key

The range of tracked crafters, which is the queue priority.

## Example Usage

```typescript
import { Key } from "@steamsets/client-ts/models/components";

let value: Key = "0";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1000+" | "100-999" | "10-99" | "1-9" | "0" | Unrecognized<string>
```