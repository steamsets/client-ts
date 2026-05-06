# AnalyticsGetTrendRequestBody

## Example Usage

```typescript
import { AnalyticsGetTrendRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetTrendRequestBody = {
  domain: "drab-behest.org",
  metric: "<value>",
  scope: "<value>",
  window: "30d",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Analytics domain ID.                                                                                           |
| `metric`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Metric ID within the domain.                                                                                   |
| `scope`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Scope ID within the domain.                                                                                    |
| `scopeValue`                                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `window`                                                                                                       | [components.AnalyticsGetTrendRequestBodyWindow](../../models/components/analyticsgettrendrequestbodywindow.md) | :heavy_check_mark:                                                                                             | Lookback window.                                                                                               |