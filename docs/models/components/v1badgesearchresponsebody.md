# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 434417,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 311796,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 696344,
      highestLevel: 377752,
      id: "<id>",
      image: "https://loremflickr.com/719/99?lock=6119426083132711",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 453697,
      level: 536579,
      name: "<value>",
      scarcity: 896672,
      steamId: 990339,
      xp: 2168.97,
    },
  ],
  facets: "<value>",
  pages: 663078,
  results: 263322,
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