# ItemGetItem

## Example Usage

```typescript
import { ItemGetItem } from "@steamsets/client-ts/models/components";

let value: ItemGetItem = {
  app: {
    appId: 425122,
    name: "<value>",
  },
  classId: 434537,
  gems: 427956,
  isFoil: true,
  isMarketable: true,
  kind: "emoticon",
  name: "<value>",
  points: 798274,
  priceCents: 186040,
  rarity: 729446,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `app`                                                                                         | [components.ItemGetApp](../../models/components/itemgetapp.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | 0 for a card that has never been on the Steam market.                                         |
| `gems`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Gems the item turns into.                                                                     |
| `isFoil`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isMarketable`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [components.ItemGetItemKind](../../models/components/itemgetitemkind.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSoldAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last Steam market sale. Missing when none is known.                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `points`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Points Shop price in points, 0 when the Points Shop does not sell it.                         |
| `priceCents`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Cheapest Steam market listing in US cents, 0 when there is none.                              |
| `rarity`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Booster drop rarity of a background or emoticon: 0 common, 1 uncommon, 2 rare.                |