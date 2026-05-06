# AnalyticsGetDistributionRequestBody

## Example Usage

```typescript
import { AnalyticsGetDistributionRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetDistributionRequestBody = {
  domain: "sure-footed-switch.net",
  metric: "<value>",
  scope: "<value>",
  scopeValue: "DE",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `domain`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Analytics domain ID. See analytics.listMetrics.                                                                    |                                                                                                                    |
| `metric`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Metric ID within the domain.                                                                                       |                                                                                                                    |
| `scope`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Scope ID within the domain (global, country, region, …).                                                           |                                                                                                                    |
| `scopeValue`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Scope value — country name or ISO code ("Germany" / "DE"), region name ("Europe"). Required for non-global scopes. | DE                                                                                                                 |