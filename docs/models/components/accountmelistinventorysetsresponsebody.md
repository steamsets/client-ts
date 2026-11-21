# AccountMeListInventorySetsResponseBody

## Example Usage

```typescript
import { AccountMeListInventorySetsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountMeListInventorySetsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountMeListInventorySetsResponseBody.json",
  inventoryUpdatedAt: new Date("2025-07-27T03:33:40.837Z"),
  nextCursor: "<value>",
  nextRefreshAt: new Date("2026-02-08T20:51:05.959Z"),
  sets: [],
  total: 404313,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A URL to the JSON Schema for this object.                                                                  | https://api.steamsets.com/schemas/AccountMeListInventorySetsResponseBody.json                              |
| `inventoryUpdatedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | When SteamSets last read the inventory from Steam. Null when it never has.                                 |                                                                                                            |
| `nextCursor`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Send it as cursor for the next page. Null on the last page.                                                |                                                                                                            |
| `nextRefreshAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | The earliest time account.me.refreshInventory reads the inventory again. Null when it never has been read. |                                                                                                            |
| `sets`                                                                                                     | [components.AccountMeInventorySet](../../models/components/accountmeinventoryset.md)[]                     | :heavy_check_mark:                                                                                         | Apps with at least one card in the inventory, by app id.                                                   |                                                                                                            |
| `total`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Apps across all pages.                                                                                     |                                                                                                            |