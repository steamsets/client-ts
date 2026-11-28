# AdminCrawlerStatsQueueTier

## Example Usage

```typescript
import { AdminCrawlerStatsQueueTier } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsQueueTier = {
  count: 419467,
  maxAttempts: 858410,
  oldestDueAt: new Date("2026-11-14T13:41:00.136Z"),
  priority: 771986,
  tier: "10k+",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `maxAttempts`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `oldestDueAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `priority`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Lower is fetched sooner                                                                       |                                                                                               |
| `tier`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 10k+                                                                                          |