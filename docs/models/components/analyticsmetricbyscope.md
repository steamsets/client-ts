# AnalyticsMetricByScope

## Example Usage

```typescript
import { AnalyticsMetricByScope } from "@steamsets/client-ts/models/components";

let value: AnalyticsMetricByScope = {
  dollarSchema: "https://api.steamsets.com/schemas/AnalyticsMetricByScope.json",
  buckets: [
    {
      count: 507548,
      value: 7155.42,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | A URL to the JSON Schema for this object.                                            | https://api.steamsets.com/schemas/AnalyticsMetricByScope.json                        |
| `buckets`                                                                            | [components.AnalyticsScopeBucket](../../models/components/analyticsscopebucket.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |