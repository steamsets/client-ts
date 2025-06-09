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
      lastCompletion: 270740,
      level: 672493,
      name: "<value>",
      scarcity: 83446,
      steamId: 67481,
      xp: 1630.73,
    },
  ],
  facets: "<value>",
  pages: 664455,
  results: 136677,
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