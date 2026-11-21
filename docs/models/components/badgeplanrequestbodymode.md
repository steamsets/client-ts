# BadgePlanRequestBodyMode

Which badges to craft. collector crafts only what adds a badge: the first level of a normal badge you lack, and foil badges you lack.

## Example Usage

```typescript
import { BadgePlanRequestBodyMode } from "@steamsets/client-ts/models/components";

let value: BadgePlanRequestBodyMode = "normal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"any" | "normal" | "foil" | "collector" | Unrecognized<string>
```