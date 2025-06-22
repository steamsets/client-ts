# V1BadgeListBadgePricesResponseBody

## Example Usage

```typescript
import { V1BadgeListBadgePricesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeListBadgePricesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeListBadgePricesResponseBody.json",
  apps: {
    "key": {
      bgAvg: 802447,
      boosterPrice: 686707,
      emoteAvg: 73136,
      image: "https://picsum.photos/seed/IAyzeEJ9/2402/1030",
      name: "<value>",
      owned: true,
    },
  },
  setCounts: {
    duplicate: {
      foil: 538702,
      normal: 573471,
      total: 412969,
    },
    total: {
      foil: 862978,
      normal: 336959,
      total: 433942,
    },
    unique: {
      foil: 587953,
      normal: 455747,
      total: 312551,
    },
  },
  sets: [
    {
      appId: 693605,
      avgCardPrc: 461273,
      badges: {},
      canBuy: true,
      cards: 610032,
      currLevel: 549617,
      isFoil: false,
      issues: [],
      link: "<value>",
      maxPrc: 551705,
      minPrc: 535836,
      price: 455432,
      priceDiff: 992152,
      setCount: {
        duplicateSets: 519486,
        uniqueSets: 176774,
      },
    },
  ],
  total: 260984,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgeListBadgePricesResponseBody.json      |
| `apps`                                                                         | Record<string, [components.V1BadgeApp](../../models/components/v1badgeapp.md)> | :heavy_check_mark:                                                             | App information indexed by app ID                                              |                                                                                |
| `setCounts`                                                                    | [components.V1BadgeSetCounts](../../models/components/v1badgesetcounts.md)     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `sets`                                                                         | [components.V1BadgeSet](../../models/components/v1badgeset.md)[]               | :heavy_check_mark:                                                             | Badge sets with pricing information                                            |                                                                                |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | Total number of badge sets                                                     |                                                                                |