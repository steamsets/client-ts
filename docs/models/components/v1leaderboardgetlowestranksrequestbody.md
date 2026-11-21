# V1LeaderboardGetLowestRanksRequestBody

## Example Usage

```typescript
import { V1LeaderboardGetLowestRanksRequestBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardGetLowestRanksRequestBody = {
  keys: [
    700,
    800,
    1000,
    1300,
  ],
  leaderboard: "xp",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`                                                                                                                                                     | *number*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | Answer only these keys (Steam levels on xp, game counts on apps) instead of every one, e.g. the stops of a level timeline. A key with no rank is left out. | [<br/>700,<br/>800,<br/>1000,<br/>1300<br/>]                                                                                                               |
| `leaderboard`                                                                                                                                              | [components.V1LeaderboardGetLowestRanksRequestBodyLeaderboard](../../models/components/v1leaderboardgetlowestranksrequestbodyleaderboard.md)               | :heavy_check_mark:                                                                                                                                         | The leaderboard to get. Currently only supports XP and apps                                                                                                | xp                                                                                                                                                         |