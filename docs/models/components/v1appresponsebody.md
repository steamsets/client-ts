# V1AppResponseBody

## Example Usage

```typescript
import { V1AppResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
  badges: [
    {
      accountBadge: {
        completedAt: new Date("2023-05-13T01:59:12.211Z"),
        level: 722056,
        xp: 866383,
      },
      badgeImage: "<value>",
      firstCompletion: new Date("2024-12-05T04:07:03.604Z"),
      highestLevel: 855804,
      isFoil: false,
      lastCompletion: new Date("2022-01-13T20:07:38.173Z"),
      level: 359978,
      name: "<value>",
      price: 729991,
      publicId: "<id>",
      scarcity: 171629,
      steamId: 521037,
      xp: 54338,
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
      cost: 199996,
      description: "coliseum overcooked what",
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