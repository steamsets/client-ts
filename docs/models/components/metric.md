# Metric

What to sort by. score = XP/playtime/badges depending on leaderboard. rank = leaderboard position.

## Example Usage

```typescript
import { Metric } from "@steamsets/client-ts/models/components";

let value: Metric = "rank";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"score" | "rank" | Unrecognized<string>
```