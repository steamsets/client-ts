# AnalyticsGetInequalityRequestBody

## Example Usage

```typescript
import { AnalyticsGetInequalityRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetInequalityRequestBody = {
  domain: "shimmering-morning.com",
  metric: "<value>",
  scope: "<value>",
  scopeValue: "DE",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `domain`                                                          | *string*                                                          | :heavy_check_mark:                                                | Analytics domain ID. See analytics.listMetrics.                   |                                                                   |
| `metric`                                                          | *string*                                                          | :heavy_check_mark:                                                | Metric ID within the domain.                                      |                                                                   |
| `scope`                                                           | *string*                                                          | :heavy_check_mark:                                                | Scope ID within the domain.                                       |                                                                   |
| `scopeValue`                                                      | *string*                                                          | :heavy_minus_sign:                                                | Country name/code or region name. Required for non-global scopes. | DE                                                                |