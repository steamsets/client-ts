# DeveloperAppAnalyticsTimeSeries

## Example Usage

```typescript
import { DeveloperAppAnalyticsTimeSeries } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalyticsTimeSeries = {
  daily: [
    {
      count: 423,
      outcome: "VALID",
      time: new Date("2024-01-15T00:00:00.000Z"),
    },
  ],
  hourly: [
    {
      count: 423,
      outcome: "VALID",
      time: new Date("2024-01-15T00:00:00.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `daily`                                                                                                                                                              | [components.DeveloperAppAnalyticsTimeSeriesPoint](../../models/components/developerappanalyticstimeseriespoint.md)[]                                                 | :heavy_check_mark:                                                                                                                                                   | Daily time series data for the last 7 UTC days, today included. Every day has a point for VALID and for each other outcome seen that week, zero when there were none |
| `hourly`                                                                                                                                                             | [components.DeveloperAppAnalyticsTimeSeriesPoint](../../models/components/developerappanalyticstimeseriespoint.md)[]                                                 | :heavy_check_mark:                                                                                                                                                   | Hourly time series data for the last 24 hours                                                                                                                        |