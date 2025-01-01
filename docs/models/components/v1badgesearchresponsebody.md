# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 813798,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 396506,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 881104,
      highestLevel: 581273,
      id: "<id>",
      image: "https://picsum.photos/seed/XDqB1iEh/3527/2770",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 618016,
      level: 428769,
      name: "<value>",
      price: 135474,
      scarcity: 298282,
      steamId: 569965,
      xp: 5908.73,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json |
| `badges`                                                         | [components.Badge](../../models/components/badge.md)[]           | :heavy_check_mark:                                               | N/A                                                              |                                                                  |