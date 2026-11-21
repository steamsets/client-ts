# BotPlanRequestBodyGames

Limit to games you own, or to games you do not. Ignored without a session.

## Example Usage

```typescript
import { BotPlanRequestBodyGames } from "@steamsets/client-ts/models/components";

let value: BotPlanRequestBodyGames = "all";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"all" | "owned" | "notOwned" | Unrecognized<string>
```