# V1AppResponseBody

## Example Usage

```typescript
import { V1AppResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
  badges: [
    {
      accountBadge: {
        completedAt: new Date("2024-01-01T18:37:53.665Z"),
        level: 653140,
        xp: 670638,
      },
      badgeImage: "<value>",
      firstCompletion: new Date("2022-07-07T07:36:20.712Z"),
      highestLevel: 210382,
      isFoil: false,
      lastCompletion: new Date("2023-01-28T12:50:04.866Z"),
      level: 128926,
      name: "<value>",
      price: 750686,
      publicId: "<value>",
      scarcity: 315428,
      steamId: 607831,
      xp: 363711,
    },
  ],
  detail: {
    appId: 730,
    image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
    isEvent: true,
    isSale: true,
    name: "CS2",
    price: 1200,
    shortName: "csgo",
    type: "game",
  },
  items: [
    {
      cost: 325047,
      description: "Organized 4th generation help-desk",
      largeImage: "<value>",
      name: "<value>",
      publicId: "<value>",
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