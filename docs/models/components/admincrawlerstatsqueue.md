# AdminCrawlerStatsQueue

## Example Usage

```typescript
import { AdminCrawlerStatsQueue } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsQueue = {
  maxAttempts: 337404,
  oldestDueAt: new Date("2026-10-16T09:59:23.137Z"),
  tiers: [],
  total: 243072,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `maxAttempts`                                                                                    | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `oldestDueAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tiers`                                                                                          | [components.AdminCrawlerStatsQueueTier](../../models/components/admincrawlerstatsqueuetier.md)[] | :heavy_check_mark:                                                                               | Sorted by priority                                                                               |
| `total`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |