# AdminCrawlerStatsResponseBody

## Example Usage

```typescript
import { AdminCrawlerStatsResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminCrawlerStatsResponseBody.json",
  crawler: "group",
  crawlers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  frontier: {
    newestAt: new Date("2024-05-20T02:03:18.269Z"),
    newestId: 93428,
    nextId: 945258,
  },
  generatedAt: new Date("2026-03-12T07:56:26.690Z"),
  health: [
    {
      consecutiveErrors: 985747,
      expectedIntervalSeconds: 366210,
      lane: "batch",
      lastEndedAt: new Date("2025-05-21T18:43:54.843Z"),
      lastError: "<value>",
      lastErrorAt: new Date("2025-11-07T02:14:32.175Z"),
      lastRunAt: new Date("2026-02-12T20:37:53.586Z"),
      lastSuccessAt: new Date("2024-04-23T10:31:00.988Z"),
      status: "stuck",
    },
  ],
  hourly: [],
  lanes: [],
  queue: {
    maxAttempts: 900511,
    oldestDueAt: new Date("2026-03-16T06:35:21.527Z"),
    tiers: [
      {
        count: 50010,
        maxAttempts: 615537,
        oldestDueAt: null,
        priority: 880118,
        tier: "10k+",
      },
    ],
    total: 800624,
  },
  recentRuns: [
    {
      absent: 920285,
      changed: 41691,
      created: 273688,
      durationMs: 289162,
      enqueued: 398499,
      error: "<value>",
      failed: 910991,
      fetchMs: 455548,
      fetched: 286424,
      fromId: 519867,
      id: 830776,
      lagAvgS: 334964,
      lagMaxS: 225677,
      lane: "<value>",
      limiterLimit: 713503,
      missing: 445606,
      rateLimited: 835387,
      requests: 559774,
      scanned: 457091,
      startedAt: new Date("2025-06-20T01:53:28.953Z"),
      toId: 220358,
      unchanged: 448437,
      writeMs: 73010,
    },
  ],
  signals: [
    {
      key: "dirty_class_backlog",
      label: "dirty_class backlog",
      status: "ok",
      unit: "age",
      updatedAt: new Date("2026-02-01T07:09:22.814Z"),
      value: 382978,
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A URL to the JSON Schema for this object.                                                          | https://api.steamsets.com/schemas/AdminCrawlerStatsResponseBody.json                               |
| `crawler`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | group                                                                                              |
| `crawlers`                                                                                         | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Every crawler with a cursor or a recorded run, for a selector                                      |                                                                                                    |
| `frontier`                                                                                         | [components.AdminCrawlerStatsFrontier](../../models/components/admincrawlerstatsfrontier.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `generatedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `health`                                                                                           | [components.AdminCrawlerStatsLaneHealth](../../models/components/admincrawlerstatslanehealth.md)[] | :heavy_check_mark:                                                                                 | Every lane's staleness verdict, sorted by lane                                                     |                                                                                                    |
| `hourly`                                                                                           | [components.AdminCrawlerStatsHour](../../models/components/admincrawlerstatshour.md)[]             | :heavy_check_mark:                                                                                 | One row per hour and lane, oldest first                                                            |                                                                                                    |
| `lanes`                                                                                            | [components.AdminCrawlerStatsLane](../../models/components/admincrawlerstatslane.md)[]             | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `queue`                                                                                            | [components.AdminCrawlerStatsQueue](../../models/components/admincrawlerstatsqueue.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `recentRuns`                                                                                       | [components.AdminCrawlerStatsRun](../../models/components/admincrawlerstatsrun.md)[]               | :heavy_check_mark:                                                                                 | Newest first, at most 50                                                                           |                                                                                                    |
| `signals`                                                                                          | [components.AdminCrawlerStatsSignal](../../models/components/admincrawlerstatssignal.md)[]         | :heavy_check_mark:                                                                                 | The crawler's backlog and freshness signals from the last snapshot; empty when it has none         |                                                                                                    |