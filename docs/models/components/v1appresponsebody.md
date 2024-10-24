# V1AppResponseBody

## Example Usage

```typescript
import { V1AppResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 83422,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 552193,
      baseXp: 584476,
      firstCompletion: new Date("2024-11-20T06:46:28.205Z"),
      highestLevel: 292147,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-09-21T22:45:36.817Z"),
      name: "<value>",
      price: 100294,
      publicId: "<id>",
      scarcity: 16429,
      steamId: 929530,
    },
  ],
  detail: {
    appId: 730,
    image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
    isEvent: true,
    isSale: true,
    itadId: "<id>",
    name: "CS2",
    price: 1200,
    shortName: "csgo",
    type: "game",
  },
  items: [
    {
      cost: 669917,
      description:
        "flame turbulent westernize apud testing phooey restfully circulate emphasize",
      largeImage: "<value>",
      name: "<value>",
      publicId: "<id>",
      smallImage: "<value>",
      title: "<value>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1AppResponseBody.json         |
| `badges`                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[] | :heavy_check_mark:                                               | The badges                                                       |                                                                  |
| `detail`                                                         | [components.V1AppDetail](../../models/components/v1appdetail.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `items`                                                          | [components.V1AppItem](../../models/components/v1appitem.md)[]   | :heavy_check_mark:                                               | The items                                                        |                                                                  |