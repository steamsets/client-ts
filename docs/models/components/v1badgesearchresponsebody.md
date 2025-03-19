# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 575751,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 820767,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 908844,
      highestLevel: 815524,
      id: "<id>",
      image: "https://loremflickr.com/638/2515?lock=564868054727287",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 424032,
      level: 258684,
      name: "<value>",
      scarcity: 849039,
      steamId: 33304,
      xp: 9589.83,
    },
  ],
  facets: "<value>",
  pages: 355369,
  results: 356707,
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