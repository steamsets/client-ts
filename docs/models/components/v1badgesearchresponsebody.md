# V1BadgeSearchResponseBody

## Example Usage

```typescript
import { V1BadgeSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json",
  badges: [
    {
      appId: 881104,
      appImage: "<value>",
      appName: "<value>",
      bookmarks: 581273,
      colors: [
        "<value>",
      ],
      designs: [
        "<value>",
      ],
      firstCompletion: 881736,
      highestLevel: 692532,
      id: "<id>",
      image: "https://picsum.photos/seed/qB1iEhCq/2901/2005",
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: 135474,
      level: 298282,
      name: "<value>",
      price: 569965,
      scarcity: 590873,
      steamId: 574325,
      xp: 6532.01,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgeSearchResponseBody.json |
| `badges`                                                         | [components.Badge](../../models/components/badge.md)[]           | :heavy_check_mark:                                               | N/A                                                              |                                                                  |