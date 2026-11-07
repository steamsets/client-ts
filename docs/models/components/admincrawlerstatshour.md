# AdminCrawlerStatsHour

## Example Usage

```typescript
import { AdminCrawlerStatsHour } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsHour = {
  absent: 848772,
  changed: 337375,
  created: 453653,
  durationMsAvg: 582643,
  durationMsP95: 14591,
  enqueued: 146055,
  failed: 905166,
  fetched: 33595,
  hour: new Date("2024-04-19T08:35:17.634Z"),
  lagAvgS: 445709,
  lagMaxS: 249413,
  lane: "<value>",
  missing: 706440,
  rateLimited: 877822,
  requests: 567068,
  runs: 42855,
  scanned: 921683,
  unchanged: 906704,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `absent`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `changed`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMsAvg`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMsP95`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enqueued`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `failed`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fetched`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hour`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | UTC hour start                                                                                |
| `lagAvgS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Average lag, weighted by fetched                                                              |
| `lagMaxS`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lane`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `missing`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rateLimited`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requests`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runs`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scanned`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unchanged`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |