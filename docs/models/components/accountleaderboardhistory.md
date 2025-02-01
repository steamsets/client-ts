# AccountLeaderboardHistory

## Example Usage

```typescript
import { AccountLeaderboardHistory } from "@steamsets/client-ts/models/components";

let value: AccountLeaderboardHistory = {
  date: new Date("2023-04-02T10:20:37.470Z"),
  leaderboard: "normal_badges",
  rank: 584476,
  score: 961937,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `date`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `leaderboard`                                                                                                      | [components.AccountLeaderboardHistoryLeaderboard](../../models/components/accountleaderboardhistoryleaderboard.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rank`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `score`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |