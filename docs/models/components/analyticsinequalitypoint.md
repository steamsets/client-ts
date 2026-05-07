# AnalyticsInequalityPoint

## Example Usage

```typescript
import { AnalyticsInequalityPoint } from "@steamsets/client-ts/models/components";

let value: AnalyticsInequalityPoint = {
  popShare: 7471.35,
  valueShare: 5238.03,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `popShare`                                                       | *number*                                                         | :heavy_check_mark:                                               | Cumulative share of the population, taken from the bottom (0–1). |
| `valueShare`                                                     | *number*                                                         | :heavy_check_mark:                                               | Cumulative share of the metric owned by that bottom slice (0–1). |