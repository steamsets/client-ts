# AnalyticsDistribution

## Example Usage

```typescript
import { AnalyticsDistribution } from "@steamsets/client-ts/models/components";

let value: AnalyticsDistribution = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsDistribution.json",
  bins: [
    {
      count: 5537.19,
      xLower: 8229.87,
      xUpper: 7409.91,
    },
  ],
  summary: {
    count: 399544,
    max: 5761.47,
    mean: 9448.13,
    min: 7314.21,
    p50: 6225.93,
    p90: 7850.92,
    p99: 2157.36,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/AnalyticsDistribution.json               |
| `bins`                                                                     | [components.AnalyticsBin](../../models/components/analyticsbin.md)[]       | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `summary`                                                                  | [components.AnalyticsSummary](../../models/components/analyticssummary.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |