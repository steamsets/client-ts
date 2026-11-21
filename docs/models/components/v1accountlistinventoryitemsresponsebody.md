# V1AccountListInventoryItemsResponseBody

## Example Usage

```typescript
import { V1AccountListInventoryItemsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListInventoryItemsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListInventoryItemsResponseBody.json",
  inventoryUpdatedAt: new Date("2026-08-09T08:39:53.873Z"),
  items: [],
  pages: 1,
  totalHits: 1,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/V1AccountListInventoryItemsResponseBody.json                |
| `inventoryUpdatedAt`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the inventory was last read from Steam. Null when it never was.                          |                                                                                               |
| `items`                                                                                       | [components.V1InventoryItem](../../models/components/v1inventoryitem.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `pages`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of pages                                                                           | 1                                                                                             |
| `totalHits`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The total number of hits for all pages                                                        | 1                                                                                             |