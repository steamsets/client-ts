# AnalyticsInequality

## Example Usage

```typescript
import { AnalyticsInequality } from "@steamsets/client-ts/models/components";

let value: AnalyticsInequality = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsInequality.json",
  count: 624468,
  gini: 1050.32,
  points: [],
  top10PercentShare: 7726.85,
  top1PercentShare: 8654.5,
  top50PercentShare: 365.8,
  totalValue: 8627.98,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AnalyticsInequality.json                                    |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of non-zero contributors.                                                              |                                                                                               |
| `gini`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Gini coefficient. 0 = perfect equality, 1 = maximum inequality.                               |                                                                                               |
| `points`                                                                                      | [components.AnalyticsInequalityPoint](../../models/components/analyticsinequalitypoint.md)[]  | :heavy_check_mark:                                                                            | Lorenz curve sample points, sorted by popShare ascending. Includes (0,0) and (1,1) endpoints. |                                                                                               |
| `top10PercentShare`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | Fraction of the metric owned by the top 10% (0–1).                                            |                                                                                               |
| `top1PercentShare`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Fraction of the metric owned by the top 1% of contributors (0–1).                             |                                                                                               |
| `top50PercentShare`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | Fraction of the metric owned by the top 50% (0–1).                                            |                                                                                               |
| `totalValue`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Sum of the metric across all non-zero contributors.                                           |                                                                                               |