# AccountLeaderboardHistory

## Example Usage

```typescript
import { AccountLeaderboardHistory } from "@steamsets/client-ts/models/components";

let value: AccountLeaderboardHistory = {
  date: new Date("2025-08-01T03:56:17.075Z"),
  leaderboard: "points_given",
  rank: 270328,
  score: 131482,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `date`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `leaderboard`                                                                                                      | [components.AccountLeaderboardHistoryLeaderboard](../../models/components/accountleaderboardhistoryleaderboard.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rank`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `score`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |