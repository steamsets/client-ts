# AnalyticsGetMyPercentilesRequestBody

## Example Usage

```typescript
import { AnalyticsGetMyPercentilesRequestBody } from "@steamsets/client-ts/models/components";

let value: AnalyticsGetMyPercentilesRequestBody = {
  domain: "silky-hydrolyse.net",
  scope: "<value>",
  scopeValue: "DE",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `domain`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `scope`                                                           | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `scopeValue`                                                      | *string*                                                          | :heavy_minus_sign:                                                | Country name/code or region name. Required for non-global scopes. | DE                                                                |