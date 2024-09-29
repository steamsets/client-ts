# V1AppResponseBody

## Example Usage

```typescript
import { V1AppResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1AppResponseBody.json",
  badges: [
    {
      accountBadge: {
        completedAt: new Date("2022-01-21T07:11:50.213Z"),
        level: 793698,
        xp: 223924,
      },
      badgeImage: "<value>",
      firstCompletion: new Date("2023-01-14T12:07:50.192Z"),
      highestLevel: 928082,
      isFoil: false,
      lastCompletion: new Date("2024-02-12T00:54:59.142Z"),
      level: 31838,
      name: "<value>",
      price: 164694,
      publicId: "<id>",
      scarcity: 621479,
      steamId: 577229,
      xp: 237893,
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
      cost: 934214,
      description: "finally less over how prejudge cutover for",
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