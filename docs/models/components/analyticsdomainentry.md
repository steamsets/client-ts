# AnalyticsDomainEntry

## Example Usage

```typescript
import { AnalyticsDomainEntry } from "@steamsets/client-ts/models/components";

let value: AnalyticsDomainEntry = {
  id: "<id>",
  metrics: null,
  scopes: null,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metrics`                                                                            | [components.AnalyticsMetricEntry](../../models/components/analyticsmetricentry.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `scopes`                                                                             | [components.AnalyticsScopeEntry](../../models/components/analyticsscopeentry.md)[]   | :heavy_check_mark:                                                                   | N/A                                                                                  |