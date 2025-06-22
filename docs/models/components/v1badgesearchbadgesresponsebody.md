# V1BadgeSearchBadgesResponseBody

## Example Usage

```typescript
import { V1BadgeSearchBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchBadgesResponseBody.json",
  badges: [
    {
      vectors: {
        image: null,
      },
      appId: 64538,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 353675,
      cardCount: 569138,
      colors: [],
      designs: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      firstCompletion: 489094,
      highestLevel: 840796,
      highestPrice: 6114.51,
      id: "<id>",
      image: "https://picsum.photos/seed/UgF54a/1520/3015",
      isEvent: false,
      isFoil: true,
      isSale: true,
      lastCompletion: 816554,
      level: 445516,
      lowestPrice: 8925.98,
      name: "<value>",
      price: 5839.02,
      scarcity: 417094,
      steamId: 948325,
      xp: 6147.04,
    },
  ],
  facets: "<value>",
  pages: 218407,
  results: 225214,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/V1BadgeSearchBadgesResponseBody.json |
| `badges`                                                               | [components.Badge](../../models/components/badge.md)[]                 | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `facets`                                                               | *any*                                                                  | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `pages`                                                                | *number*                                                               | :heavy_check_mark:                                                     | total number of pages                                                  |                                                                        |
| `results`                                                              | *number*                                                               | :heavy_check_mark:                                                     | total number of results                                                |                                                                        |