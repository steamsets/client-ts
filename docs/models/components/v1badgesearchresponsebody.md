# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 576157,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 592042,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 572252,
      highestLevel: 223081,
      id: "<id>",
      image: "https://picsum.photos/seed/iOoSASGIv/3811/1789",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 956084,
      level: 643990,
      name: "<value>",
      price: 423855,
      scarcity: 606393,
      steamId: 19193,
      xp: 3015.75,
    },
  ],
  facets: "<value>",
  pages: 660174,
  results: 290077,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json |
| `badges`                                                         | [components.Badge](../../models/components/badge.md)[]           | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `facets`                                                         | *any*                                                            | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `pages`                                                          | *number*                                                         | :heavy_check_mark:                                               | total number of pages                                            |                                                                  |
| `results`                                                        | *number*                                                         | :heavy_check_mark:                                               | total number of results                                          |                                                                  |