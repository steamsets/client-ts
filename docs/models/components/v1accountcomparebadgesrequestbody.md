# V1AccountCompareBadgesRequestBody

## Example Usage

```typescript
import { V1AccountCompareBadgesRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCompareBadgesRequestBody = {
  comparing: [
    {},
  ],
  compare: {
    against: "<value>",
  },
  ignore: [
    "steam",
  ],
  order: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `comparing`                                                                                    | [components.AccountSearch](../../models/components/accountsearch.md)[]                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `compare`                                                                                      | [components.V1AccountCompare](../../models/components/v1accountcompare.md)                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `filter`                                                                                       | [components.Filter](../../models/components/filter.md)                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ignore`                                                                                       | [components.Ignore](../../models/components/ignore.md)[]                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `order`                                                                                        | [components.V1AccountCompareBadgeOrder](../../models/components/v1accountcomparebadgeorder.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `page`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |