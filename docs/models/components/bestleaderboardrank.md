# BestLeaderboardRank

## Example Usage

```typescript
import { BestLeaderboardRank } from "@steamsets/client-ts/models/components";

let value: BestLeaderboardRank = {
    leaderboard: "points_given",
    ranks: "1,1,1,1,1",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `leaderboard`                                                          | [components.Leaderboard](../../models/components/leaderboard.md)       | :heavy_check_mark:                                                     | The leaderboard of the best leaderboard                                |                                                                        |
| `ranks`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The ranks in the leaderboard in csv global,regional,country,state,city | 1,1,1,1,1                                                              |