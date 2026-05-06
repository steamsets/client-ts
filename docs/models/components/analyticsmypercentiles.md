# AnalyticsMyPercentiles

## Example Usage

```typescript
import { AnalyticsMyPercentiles } from "@steamsets/client-ts/models/components";

let value: AnalyticsMyPercentiles = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsMyPercentiles.json",
  count: 144380,
  percentiles: null,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/AnalyticsMyPercentiles.json                      |
| `count`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `percentiles`                                                                      | [components.AnalyticsPercentile](../../models/components/analyticspercentile.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |