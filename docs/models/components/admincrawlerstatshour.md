# AdminCrawlerStatsHour

## Example Usage

```typescript
import { AdminCrawlerStatsHour } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsHour = {
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
  durationMsAvg: 848772,
  durationMsP95: 337375,
  hour: new Date("2025-05-12T04:53:04.716Z"),
  lagAvgS: 582643,
  lagMaxS: 14591,
  lane: "<value>",
  runs: 146055,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `counts`                                                                                      | [components.AdminCrawlerStatsCounts](../../models/components/admincrawlerstatscounts.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMsAvg`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMsP95`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hour`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | UTC hour start                                                                                |
| `lagAvgS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Average lag, weighted by fetched                                                              |
| `lagMaxS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lane`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runs`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |