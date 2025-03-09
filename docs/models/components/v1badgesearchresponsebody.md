# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 15606,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 428796,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 68074,
      highestLevel: 251941,
      id: "<id>",
      image: "https://loremflickr.com/885/1013?lock=108412657913648",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 115484,
      level: 618480,
      name: "<value>",
      scarcity: 974257,
      steamId: 990345,
      xp: 4090.54,
    },
  ],
  facets: "<value>",
  pages: 162954,
  results: 638762,
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