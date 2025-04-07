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
        image: [
          8369.17,
        ],
      },
      appId: 589583,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 390414,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 315601,
      highestLevel: 168676,
      id: "<id>",
      image: "https://loremflickr.com/2178/2455?lock=3992625714104905",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 562229,
      level: 114028,
      name: "<value>",
      scarcity: 955156,
      steamId: 978317,
      xp: 6071.2,
    },
  ],
  facets: "<value>",
  pages: 753314,
  results: 62834,
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