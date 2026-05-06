# AnalyticsListMetricsResponseBody

## Example Usage

```typescript
import { AnalyticsListMetricsResponseBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsListMetricsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AnalyticsListMetricsResponseBody.json",
  domains: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | A URL to the JSON Schema for this object.                                            | https://api.steamsets.com/schemas/AnalyticsListMetricsResponseBody.json              |
| `domains`                                                                            | [components.AnalyticsDomainEntry](../../models/components/analyticsdomainentry.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |