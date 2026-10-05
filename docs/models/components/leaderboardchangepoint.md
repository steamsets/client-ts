# LeaderboardChangePoint

## Example Usage

```typescript
import { LeaderboardChangePoint } from "@steamsets/client-ts/models/components";

let value: LeaderboardChangePoint = {
  date: new Date("2025-09-01T11:08:15.891Z"),
  rank: 802633,
  score: 397932,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Day of the snapshot (UTC midnight).                                                           |
| `rank`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Leaderboard position on that day. Lower is better.                                            |
| `score`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Leaderboard score on that day.                                                                |