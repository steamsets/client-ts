# LeaderboardGetChangesRequestBodyWindow

Lookback window for the delta. 'all' compares each account's first retained snapshot against its latest, so it widens the delta rather than returning more accounts.

## Example Usage

```typescript
import { LeaderboardGetChangesRequestBodyWindow } from "@steamsets/client-ts/models/components";

let value: LeaderboardGetChangesRequestBodyWindow = "7d";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d" | "1y" | "all" | Unrecognized<string>
```