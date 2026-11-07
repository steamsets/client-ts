# Games

Limit to games you own, or to games you do not.

## Example Usage

```typescript
import { Games } from "@steamsets/client-ts/models/components";

let value: Games = "owned";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"all" | "owned" | "notOwned" | Unrecognized<string>
```