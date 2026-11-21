# AdminCrawlerStatsRun

## Example Usage

```typescript
import { AdminCrawlerStatsRun } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsRun = {
  counts: {
    absent: 920285,
    changed: 41691,
    created: 273688,
    enqueued: 289162,
    failed: 398499,
    fetched: 910991,
    missing: 455548,
    rateLimited: 286424,
    requests: 519867,
    scanned: 830776,
    unchanged: 334964,
  },
  durationMs: 979778,
  error: "<value>",
  fetchMs: 936290,
  lagAvgS: 782245,
  lagMaxS: 79628,
  lane: "<value>",
  limiterLimit: 743856,
  range: {
    fromId: 457091,
    toId: 489123,
  },
  startedAt: new Date("2026-06-23T05:26:15.381Z"),
  writeMs: 602834,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `counts`                                                                                      | [components.AdminCrawlerStatsCounts](../../models/components/admincrawlerstatscounts.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMs`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fetchMs`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lagAvgS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lagMaxS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lane`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limiterLimit`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `range`                                                                                       | [components.AdminCrawlerStatsRange](../../models/components/admincrawlerstatsrange.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `writeMs`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |