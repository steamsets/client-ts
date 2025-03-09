# AccountLeaderboardHistory

## Example Usage

```typescript
import { AccountLeaderboardHistory } from "@steamsets/client-ts/models/components";

let value: AccountLeaderboardHistory = {
  date: new Date("2023-04-18T05:42:04.752Z"),
  leaderboard: "steam_sets",
  rank: 972920,
  score: 960835,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `date`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `leaderboard`                                                                                                      | [components.AccountLeaderboardHistoryLeaderboard](../../models/components/accountleaderboardhistoryleaderboard.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rank`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `score`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |