# LeaderboardGetChangesRequestBody

## Example Usage

```typescript
import { LeaderboardGetChangesRequestBody } from "@steamsets/client-ts/models/components";

let value: LeaderboardGetChangesRequestBody = {
  direction: "declines",
  leaderboard: "apps",
  metric: "rank",
  window: "24h",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `direction`                                                                                                                      | [components.LeaderboardGetChangesRequestBodyDirection](../../models/components/leaderboardgetchangesrequestbodydirection.md)     | :heavy_check_mark:                                                                                                               | improvements = positive delta, declines = negative delta.                                                                        |
| `leaderboard`                                                                                                                    | [components.LeaderboardGetChangesRequestBodyLeaderboard](../../models/components/leaderboardgetchangesrequestbodyleaderboard.md) | :heavy_check_mark:                                                                                                               | Which leaderboard the delta is computed against.                                                                                 |
| `limit`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of accounts returned. Default 100.                                                                                        |
| `metric`                                                                                                                         | [components.Metric](../../models/components/metric.md)                                                                           | :heavy_check_mark:                                                                                                               | What to sort by. score = XP/playtime/badges depending on leaderboard. rank = leaderboard position.                               |
| `topFilter`                                                                                                                      | [components.TopFilter](../../models/components/topfilter.md)                                                                     | :heavy_minus_sign:                                                                                                               | Restrict to accounts within the top-N of the leaderboard at either endpoint of the window. 'all' = no restriction (default).     |
| `window`                                                                                                                         | [components.LeaderboardGetChangesRequestBodyWindow](../../models/components/leaderboardgetchangesrequestbodywindow.md)           | :heavy_check_mark:                                                                                                               | Lookback window for the delta.                                                                                                   |