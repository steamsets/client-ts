# DeveloperAppAnalytics

## Example Usage

```typescript
import { DeveloperAppAnalytics } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalytics = {
  last24Hours: {
    failedRequests: 358,
    outcomeBreakdown: [],
    successRate: 96.5,
    successfulRequests: 9876,
    totalRequests: 10234,
  },
  timeSeries: {
    hourly: [
      {
        count: 423,
        outcome: "VALID",
        time: new Date("2024-01-15T00:00:00.000Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `last24Hours`                                                                                              | [components.DeveloperAppAnalyticsLast24Hours](../../models/components/developerappanalyticslast24hours.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `timeSeries`                                                                                               | [components.DeveloperAppAnalyticsTimeSeries](../../models/components/developerappanalyticstimeseries.md)   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |