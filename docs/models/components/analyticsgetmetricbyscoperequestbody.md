# AnalyticsGetMetricByScopeRequestBody

## Example Usage

```typescript
import { AnalyticsGetMetricByScopeRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetMetricByScopeRequestBody = {
  agg: "count",
  dimension: "country",
  domain: "low-begonia.name",
  metric: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `agg`                                                                                                                    | [components.AnalyticsGetMetricByScopeRequestBodyAgg](../../models/components/analyticsgetmetricbyscoperequestbodyagg.md) | :heavy_check_mark:                                                                                                       | Aggregation applied within each dimension bucket.                                                                        |
| `dimension`                                                                                                              | [components.Dimension](../../models/components/dimension.md)                                                             | :heavy_check_mark:                                                                                                       | Group rows by this dimension. One bucket per distinct value.                                                             |
| `domain`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Analytics domain ID. See analytics.listMetrics.                                                                          |
| `metric`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Metric ID within the domain.                                                                                             |