# ExchangeClassifiedCard

## Example Usage

```typescript
import { ExchangeClassifiedCard } from "@steamsets/client-ts/models/components";

let value: ExchangeClassifiedCard = {
  averagePriceCents: 845979,
  bucket: "surplus",
  classId: 776747,
  gemsGoo: 140374,
  highestBuyOrderCents: 293035,
  icon: "<value>",
  isFoil: false,
  listed: 662335,
  marketable: false,
  medianSaleCents: 411938,
  name: "<value>",
  owned: 931569,
  priceCents: 511456,
  priceMax4d: 147210,
  priceMin4d: 346667,
  remaining: 863647,
  saleDays30d: 666865,
  saleVolume30d: 845687,
  sellOrders: 468295,
  surplus: 964437,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `averagePriceCents`                                                                                       | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Average Steam market price in cents; 0 means no data                                                      |
| `bucket`                                                                                                  | [components.Bucket](../../models/components/bucket.md)                                                    | :heavy_check_mark:                                                                                        | dead: no remaining craft can use it. surplus: owned exceeds remaining. keep: still needed                 |
| `classId`                                                                                                 | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Steam class id, the stable identity of the card                                                           |
| `gemsGoo`                                                                                                 | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Gems Steam grinds this card into; 0 means unknown                                                         |
| `highestBuyOrderCents`                                                                                    | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Highest standing buy order in cents; real money committed for this card                                   |
| `icon`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Steam economy image hash                                                                                  |
| `isFoil`                                                                                                  | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | Foil side of the set                                                                                      |
| `listed`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Active sell listings; a price backed by a handful of listings is one someone can move                     |
| `marketable`                                                                                              | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | Steam marketable flag; the exchange rejects non-marketable deposits                                       |
| `medianSaleCents`                                                                                         | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Median price this card actually sold at over the last 30 days, in cents; 0 means nothing sold             |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Card name                                                                                                 |
| `owned`                                                                                                   | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Copies held. 0 for a card of a held app that the account lacks — the withdraw side's rows                 |
| `priceCents`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Current lowest Steam market ask in cents; 0 means no data, not free                                       |
| `priceMax4d`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Highest sale price over the last 4 days, in cents; 0 means nothing sold                                   |
| `priceMin4d`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Lowest sale price over the last 4 days, in cents; 0 means nothing sold                                    |
| `remaining`                                                                                               | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Copies the account's remaining crafts can still consume. Equals owned when the badge levels without a cap |
| `saleDays30d`                                                                                             | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Distinct days in the last 30 that saw at least one sale                                                   |
| `saleVolume30d`                                                                                           | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Copies sold over the last 30 days                                                                         |
| `sellOrders`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Sell orders on the item's order book                                                                      |
| `surplus`                                                                                                 | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Copies safe to give away (owned minus remaining, zero unless bucket is surplus or dead)                   |