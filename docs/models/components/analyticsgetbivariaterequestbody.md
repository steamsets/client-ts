# AnalyticsGetBivariateRequestBody

## Example Usage

```typescript
import { AnalyticsGetBivariateRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetBivariateRequestBody = {
  agg: "median",
  domain: "slimy-diver.org",
  scope: "<value>",
  x: "<value>",
  y: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `agg`                                                       | [components.Agg](../../models/components/agg.md)            | :heavy_check_mark:                                          | How to aggregate Y inside each X bucket.                    |
| `domain`                                                    | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `scope`                                                     | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `scopeValue`                                                | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `x`                                                         | *string*                                                    | :heavy_check_mark:                                          | Metric ID for the X axis (bucketed).                        |
| `y`                                                         | *string*                                                    | :heavy_check_mark:                                          | Metric ID for the Y axis (aggregated within each X bucket). |