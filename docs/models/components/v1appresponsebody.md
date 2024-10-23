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
      appId: 929530,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 669917,
      baseXp: 785153,
      firstCompletion: new Date("2022-11-05T18:37:43.326Z"),
      highestLevel: 586410,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-03-12T02:16:45.552Z"),
      name: "<value>",
      price: 485628,
      publicId: "<id>",
      scarcity: 977496,
      steamId: 876506,
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
      cost: 338159,
      description:
        "frank now lashes save shakily hence bitterly considering barring above",
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