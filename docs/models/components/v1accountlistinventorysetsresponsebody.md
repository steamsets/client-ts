# V1AccountListInventorySetsResponseBody

## Example Usage

```typescript
import { V1AccountListInventorySetsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListInventorySetsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListInventorySetsResponseBody.json",
  nextCursor: 755558,
  sets: [
    {
      appId: 360565,
      foil: [
        {
          amount: 479802,
          name: "<value>",
        },
      ],
      foilSets: 596506,
      normal: [],
      normalSets: 949491,
    },
  ],
  total: 826318,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `dollarSchema`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | A URL to the JSON Schema for this object.                                     | https://api.steamsets.com/schemas/V1AccountListInventorySetsResponseBody.json |
| `inventoryUpdatedAt`                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | When inventory was last updated (unix millis)                                 |                                                                               |
| `nextCursor`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | Cursor for the next page, null when this is the last page                     |                                                                               |
| `nextRefreshAt`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | When next refresh is allowed (unix seconds)                                   |                                                                               |
| `sets`                                                                        | [components.InventorySet](../../models/components/inventoryset.md)[]          | :heavy_check_mark:                                                            | Inventory sets with ownership info                                            |                                                                               |
| `total`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | Total number of sets (apps) across all pages                                  |                                                                               |