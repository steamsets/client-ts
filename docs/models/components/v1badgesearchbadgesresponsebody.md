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
      colors: [
        "<value 1>",
        "<value 2>",
      ],
      designs: [
        "<value 1>",
      ],
      firstCompletion: 945501,
      highestLevel: 489094,
      id: "<id>",
      image: "https://loremflickr.com/3363/2446?lock=6789580362501293",
      isEvent: false,
      isFoil: true,
      isSale: false,
      lastChangedAt: 270740,
      lastCompletion: 672493,
      level: 83446,
      name: "<value>",
      scarcity: 67481,
      steamId: 163073,
      xp: 6644.55,
    },
  ],
  facets: "<value>",
  pages: 136677,
  results: 447990,
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