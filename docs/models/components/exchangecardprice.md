# ExchangeCardPrice

## Example Usage

```typescript
import { ExchangeCardPrice } from "@steamsets/client-ts/models/components";

let value: ExchangeCardPrice = {
  appId: 239479,
  appImage: "<value>",
  appName: "<value>",
  classId: 480176,
  firstSeenAt: 405014,
  gemsGoo: 455718,
  highestBuyOrderCents: 258982,
  icon: "<value>",
  isFoil: false,
  kind: "background",
  listed: 356632,
  marketable: true,
  medianSaleCents: 294416,
  name: "<value>",
  priceCents: 43973,
  priceMax4d: 788774,
  priceMin4d: 484068,
  saleDays30d: 17858,
  saleVolume30d: 871286,
  sellOrders: 316538,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The app the card belongs to                                                                                  |
| `appImage`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The app's image URL                                                                                          |
| `appName`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The app's name, so a caller can label an item of a game it knows nothing else about                          |
| `classId`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Steam class id, the stable identity of the card                                                              |
| `firstSeenAt`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Unix ms when this card was catalogued — the release-date proxy for a new-card quote lockout. 0 means unknown |
| `gemsGoo`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Gems Steam grinds this card into; 0 means unknown                                                            |
| `highestBuyOrderCents`                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Highest standing buy order in cents; real money committed for this card                                      |
| `icon`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Steam economy image hash                                                                                     |
| `isFoil`                                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Foil side of the set                                                                                         |
| `kind`                                                                                                       | [components.ExchangeCardPriceKind](../../models/components/exchangecardpricekind.md)                         | :heavy_check_mark:                                                                                           | What the item is. A background or emoticon is priced off gemsGoo, never off the market                       |
| `listed`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Active sell listings; a price backed by a handful of listings is one someone can move                        |
| `marketable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Steam marketable flag; the exchange rejects non-marketable cards                                             |
| `medianSaleCents`                                                                                            | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Median price this card actually sold at over the last 30 days, in cents; 0 means nothing sold                |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Card name                                                                                                    |
| `priceCents`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Current lowest Steam market ask in cents; 0 means no data, not free                                          |
| `priceMax4d`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Highest sale price over the last 4 days, in cents; 0 means nothing sold                                      |
| `priceMin4d`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Lowest sale price over the last 4 days, in cents; 0 means nothing sold                                       |
| `saleDays30d`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Distinct days in the last 30 that saw at least one sale                                                      |
| `saleVolume30d`                                                                                              | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Copies sold over the last 30 days                                                                            |
| `sellOrders`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Sell orders on the item's order book                                                                         |