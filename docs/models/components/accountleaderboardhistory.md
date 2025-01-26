# AccountLeaderboardHistory

## Example Usage

```typescript
import { AccountLeaderboardHistory } from "@steamsets/client-ts/models/components";

let value: AccountLeaderboardHistory = {
  date: new Date("2025-04-11T04:23:31.598Z"),
  leaderboard: "game_bans",
  rank: 383464,
  score: 588317,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `date`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `leaderboard`                                                                                                      | [components.AccountLeaderboardHistoryLeaderboard](../../models/components/accountleaderboardhistoryleaderboard.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `rank`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `score`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |