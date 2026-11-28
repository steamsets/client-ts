# AppGetBadge

## Example Usage

```typescript
import { AppGetBadge } from "@steamsets/client-ts/models/components";

let value: AppGetBadge = {
  cardCount: 273857,
  cards: [],
  levels: [
    {
      badgeId: "bdg_123",
      highestLevel: 416191,
      image: "https://picsum.photos/seed/ISVLgVlbO/3340/1347",
      level: 875172,
      name: "<value>",
      scarcity: 501115,
      steamBadgeId: 436028,
      trackedHolders: 102000,
      xp: 478355,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `booster`                                                                                     | [components.AppGetBooster](../../models/components/appgetbooster.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cardCount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cards`                                                                                       | [components.AppGetCard](../../models/components/appgetcard.md)[]                              | :heavy_check_mark:                                                                            | Empty without prices.                                                                         |
| `isEveryCardListed`                                                                           | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Every card of this badge has a listing on the Steam market. Missing without prices.           |
| `isMarketable`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | False when a card of this badge cannot be sold on the Steam market. Missing without prices.   |
| `levels`                                                                                      | [components.AppGetLevel](../../models/components/appgetlevel.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prices`                                                                                      | [components.AppGetPrices](../../models/components/appgetprices.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When SteamSets last read these prices from the Steam market. Missing without prices.          |