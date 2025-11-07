# DeveloperAppAnalyticsTimeSeriesPoint

## Example Usage

```typescript
import { DeveloperAppAnalyticsTimeSeriesPoint } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalyticsTimeSeriesPoint = {
  count: 423,
  outcome: "VALID",
  time: new Date("2024-01-15T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of verifications at this time                                                      | 423                                                                                           |
| `outcome`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The outcome of the verifications                                                              | VALID                                                                                         |
| `time`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the data point                                                               | 2024-01-15T00:00:00.000Z                                                                      |