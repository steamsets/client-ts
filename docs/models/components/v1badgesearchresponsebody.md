# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 944373,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 739551,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 490459,
      highestLevel: 227414,
      id: "<id>",
      image: "https://loremflickr.com/1018/233?lock=2808407635928591",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 696344,
      level: 377752,
      name: "<value>",
      price: 179603,
      scarcity: 24678,
      steamId: 67249,
      xp: 6793.93,
    },
  ],
  facets: "<value>",
  pages: 453697,
  results: 536579,
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