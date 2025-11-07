# DeveloperAppAnalyticsTimeSeries

## Example Usage

```typescript
import { DeveloperAppAnalyticsTimeSeries } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalyticsTimeSeries = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `hourly`                                                                                                             | [components.DeveloperAppAnalyticsTimeSeriesPoint](../../models/components/developerappanalyticstimeseriespoint.md)[] | :heavy_check_mark:                                                                                                   | Hourly time series data for the last 24 hours                                                                        |