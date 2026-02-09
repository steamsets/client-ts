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
      id: "<id>",
      image: "https://picsum.photos/seed/bUgF54aF/2446/1520",
      isEvent: true,
      isFoil: true,
      isNmc: false,
      isSale: true,
      lastChangedAt: 892598,
      lastCompletion: 583902,
      level: 417094,
      name: "<value>",
      noListing: false,
      scarcity: 614704,
      steamId: 218407,
      xp: 2252.14,
    },
  ],
  facets: "<value>",
  pages: 437437,
  results: 685898,
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