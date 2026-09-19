# ExchangeClassifiedApp

## Example Usage

```typescript
import { ExchangeClassifiedApp } from "@steamsets/client-ts/models/components";

let value: ExchangeClassifiedApp = {
  appId: 900203,
  cards: [
    {
      averagePriceCents: 281836,
      bucket: "surplus",
      classId: 965058,
      gemsGoo: 700216,
      highestBuyOrderCents: 991664,
      icon: "<value>",
      isFoil: true,
      listed: 78578,
      marketable: false,
      medianSaleCents: 40370,
      name: "<value>",
      owned: 723084,
      priceCents: 917620,
      priceMax4d: 234068,
      priceMin4d: 858891,
      remaining: 933955,
      saleDays30d: 172431,
      saleVolume30d: 758632,
      sellOrders: 292510,
      surplus: 765534,
    },
  ],
  cardsFirstSeenAt: 585424,
  foilCrafted: false,
  hasFoilBadge: true,
  image: "https://loremflickr.com/1363/2424?lock=8917847099168050",
  missingBadgeData: true,
  name: "<value>",
  normalRemaining: 891865,
  normalUncapped: false,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The app id                                                                                                                       |
| `cards`                                                                                                                          | [components.ExchangeClassifiedCard](../../models/components/exchangeclassifiedcard.md)[]                                         | :heavy_check_mark:                                                                                                               | The account's cards for this app                                                                                                 |
| `cardsFirstSeenAt`                                                                                                               | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Unix ms when the first of this app's cards was catalogued — the release-date proxy for a new-card quote lockout. 0 means unknown |
| `foilCrafted`                                                                                                                    | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | The account already crafted the foil badge                                                                                       |
| `hasFoilBadge`                                                                                                                   | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | A foil badge exists for this app                                                                                                 |
| `image`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | App capsule image                                                                                                                |
| `missingBadgeData`                                                                                                               | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | No badge rows are known for this app; every card is kept rather than guessed dead                                                |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | App name                                                                                                                         |
| `normalRemaining`                                                                                                                | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Normal badge crafts left (level cap minus current level)                                                                         |
| `normalUncapped`                                                                                                                 | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | The normal badge levels without a cap; its cards are never dead                                                                  |