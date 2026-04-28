# AccountGetTrendingRequestBody

## Example Usage

```typescript
import { AccountGetTrendingRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountGetTrendingRequestBody = {
  window: "7d",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Max accounts returned. Default 100.                                                                      |
| `window`                                                                                                 | [components.Window](../../models/components/window.md)                                                   | :heavy_check_mark:                                                                                       | Lookback window for trending compute. 24h is high-volatility (small samples); 7d is the default surface. |