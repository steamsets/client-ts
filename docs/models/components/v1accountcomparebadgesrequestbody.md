# V1AccountCompareBadgesRequestBody

## Example Usage

```typescript
import { V1AccountCompareBadgesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCompareBadgesRequestBody = {
  accounts: [
    {},
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accounts`                                                             | [components.AccountSearch](../../models/components/accountsearch.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `appIds`                                                               | *number*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `appTypes`                                                             | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `excludeAppIds`                                                        | *number*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `filter`                                                               | [components.Filter](../../models/components/filter.md)                 | :heavy_minus_sign:                                                     | N/A                                                                    |
| `ignore`                                                               | [components.Ignore](../../models/components/ignore.md)[]               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `match`                                                                | [components.Match](../../models/components/match.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `minLevel`                                                             | *number*                                                               | :heavy_minus_sign:                                                     | Only used when match=tupleMinLevel                                     |
| `mode`                                                                 | [components.Mode](../../models/components/mode.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `order`                                                                | [components.Order](../../models/components/order.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `ranges`                                                               | [components.RangeFilter](../../models/components/rangefilter.md)[]     | :heavy_minus_sign:                                                     | N/A                                                                    |