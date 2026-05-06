# AnalyticsScopeBucket

## Example Usage

```typescript
import { AnalyticsScopeBucket } from "@steamsets/client-ts/models/components";

let value: AnalyticsScopeBucket = {
  count: 590183,
  value: 6164.57,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `count`                                                            | *number*                                                           | :heavy_check_mark:                                                 | Sample size — accounts contributing to this bucket.                |
| `countryCode`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Country ISO alpha-2 code, e.g. "DE". Stable join key for map data. |
| `countryName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Country name, e.g. "Germany"                                       |
| `region`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Region name, e.g. "Europe"                                         |
| `value`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The metric's aggregated value for this bucket.                     |