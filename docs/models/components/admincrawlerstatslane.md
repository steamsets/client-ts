# AdminCrawlerStatsLane

## Example Usage

```typescript
import { AdminCrawlerStatsLane } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsLane = {
  currentPass: [
    {
      due: 152152,
      enqueued: 779601,
      seen: 761696,
      tier: "10k+",
    },
  ],
  lane: "scan",
  lastPass: [],
  lastPassSeconds: 357763,
  maxId: 612336,
  nextId: 162891,
  passStartedAt: new Date("2024-03-03T15:24:51.612Z"),
  passes: 382005,
  progressPct: 640.73,
  updatedAt: new Date("2024-05-25T13:43:17.497Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `currentPass`                                                                                  | [components.AdminCrawlerStatsTierPass](../../models/components/admincrawlerstatstierpass.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `lane`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | scan                                                                                           |
| `lastPass`                                                                                     | [components.AdminCrawlerStatsTierPass](../../models/components/admincrawlerstatstierpass.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `lastPassSeconds`                                                                              | *number*                                                                                       | :heavy_check_mark:                                                                             | How long the last completed pass took; null before the first one                               |                                                                                                |
| `maxId`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | Highest entity id at the lane's last run; scan only, 0 otherwise                               |                                                                                                |
| `nextId`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | Next entity id the lane reads                                                                  |                                                                                                |
| `passStartedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `passes`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | Completed passes over the id space                                                             |                                                                                                |
| `progressPct`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | nextId / maxId * 100 for scan, 0 otherwise                                                     |                                                                                                |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |