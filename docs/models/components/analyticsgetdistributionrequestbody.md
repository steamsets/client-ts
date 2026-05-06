# AnalyticsGetDistributionRequestBody

## Example Usage

```typescript
import { AnalyticsGetDistributionRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetDistributionRequestBody = {
  domain: "sure-footed-switch.net",
  metric: "<value>",
  scope: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `domain`                                                       | *string*                                                       | :heavy_check_mark:                                             | Analytics domain ID. See analytics.listMetrics.                |
| `metric`                                                       | *string*                                                       | :heavy_check_mark:                                             | Metric ID within the domain.                                   |
| `scope`                                                        | *string*                                                       | :heavy_check_mark:                                             | Scope ID within the domain (global, country, region, …).       |
| `scopeValue`                                                   | *number*                                                       | :heavy_minus_sign:                                             | Scope value (e.g. country_id). Required for non-global scopes. |