# V1BadgeSearchBadgesResponseBody

## Example Usage

```typescript
import { V1BadgeSearchBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchBadgesResponseBody.json",
  badges: [
    {
      appId: 32200,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 64538,
      cardCount: 353675,
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
      isNmc: false,
      isSale: true,
      lastChangedAt: 672493,
      lastCompletion: 83446,
      level: 67481,
      name: "<value>",
      noListing: true,
      scarcity: 664455,
      steamId: 136677,
      xp: 4479.9,
    },
  ],
  facets: {
    "key": {
      "key": 892598,
    },
    "key1": {
      "key": 417094,
      "key1": 948325,
    },
    "key2": {
      "key": 218407,
      "key1": 225214,
    },
  },
  results: 437437,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/V1BadgeSearchBadgesResponseBody.json |
| `badges`                                                               | [components.Badge](../../models/components/badge.md)[]                 | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `facets`                                                               | Record<string, Record<string, *number*>>                               | :heavy_check_mark:                                                     | Precomputed global facet counts (refreshed hourly).                    |                                                                        |
| `results`                                                              | *number*                                                               | :heavy_check_mark:                                                     | Number of badges returned in this page.                                |                                                                        |