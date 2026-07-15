# CurrentLeaderboardRank

## Example Usage

```typescript
import { CurrentLeaderboardRank } from "@steamsets/client-ts/models/components";

let value: CurrentLeaderboardRank = {
  leaderboard: "app_playtime",
  ranks: "1,1,1,1,1",
  totals: "2844566,180244,90233,1200,42",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `leaderboard`                                                                                                | [components.CurrentLeaderboardRankLeaderboard](../../models/components/currentleaderboardrankleaderboard.md) | :heavy_check_mark:                                                                                           | The leaderboard of the best leaderboard                                                                      |                                                                                                              |
| `ranks`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ranks in the leaderboard in csv global,regional,country,state,city                                       | 1,1,1,1,1                                                                                                    |
| `totals`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The total ranked players per scope, same order as ranks: global,regional,country,state,city                  | 2844566,180244,90233,1200,42                                                                                 |