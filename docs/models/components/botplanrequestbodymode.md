# BotPlanRequestBodyMode

Which badges to craft. collector buys only sets that add a badge: one normal set per app with no badge yet, and foils not crafted yet.

## Example Usage

```typescript
import { BotPlanRequestBodyMode } from "@steamsets/client-ts/models/components";

let value: BotPlanRequestBodyMode = "collector";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"any" | "normal" | "foil" | "collector" | Unrecognized<string>
```