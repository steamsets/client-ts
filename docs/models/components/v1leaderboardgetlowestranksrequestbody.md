# V1LeaderboardGetLowestRanksRequestBody

## Example Usage

```typescript
import { V1LeaderboardGetLowestRanksRequestBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardGetLowestRanksRequestBody = {
  leaderboard: "xp",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `leaderboard`                                                                                                                                | [components.V1LeaderboardGetLowestRanksRequestBodyLeaderboard](../../models/components/v1leaderboardgetlowestranksrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                                           | The leaderboard to get. Currently only supports XP and apps                                                                                  | xp                                                                                                                                           |