# V1AccountListInventorySetsResponseBody

## Example Usage

```typescript
import { V1AccountListInventorySetsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListInventorySetsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListInventorySetsResponseBody.json",
  sets: [
    {
      appId: 131151,
      foil: [],
      foilSets: 866546,
      normal: [],
      normalSets: 596506,
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `dollarSchema`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | A URL to the JSON Schema for this object.                                     | https://api.steamsets.com/schemas/V1AccountListInventorySetsResponseBody.json |
| `inventoryUpdatedAt`                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | When inventory was last updated (unix millis)                                 |                                                                               |
| `nextRefreshAt`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | When next refresh is allowed (unix seconds)                                   |                                                                               |
| `sets`                                                                        | [components.InventorySet](../../models/components/inventoryset.md)[]          | :heavy_check_mark:                                                            | Inventory sets with ownership info                                            |                                                                               |