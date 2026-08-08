# V1AppFilters

## Example Usage

```typescript
import { V1AppFilters } from "@steamsets/client-ts/models/components";

let value: V1AppFilters = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `appType`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Filter by app type (e.g., 'game', 'dlc')                                                                           |
| `excludeEvents`                                                                                                    | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Exclude event apps                                                                                                 |
| `excludeSales`                                                                                                     | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Exclude sale/promotional apps                                                                                      |
| `hasBadge`                                                                                                         | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | If true, only apps where the account has crafted at least one badge; if false, only apps where it has crafted none |
| `playtime`                                                                                                         | [components.Range](../../models/components/range.md)                                                               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |