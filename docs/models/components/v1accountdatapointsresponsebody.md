# V1AccountDataPointsResponseBody

## Example Usage

```typescript
import { V1AccountDataPointsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountDataPointsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json",
  mostXp: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 345352,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 928082,
      baseXp: 704415,
      firstCompletion: new Date("2023-02-04T21:29:28.328Z"),
      highestLevel: 164694,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-11-12T03:22:04.343Z"),
      name: "<value>",
      price: 577229,
      publicId: "<id>",
      scarcity: 237893,
      steamId: 934214,
    },
  ],
  playtime: [
    {
      appId: 730,
      image: "someHash.idk",
      name: "CS2",
      playtime: 15,
    },
  ],
  scarcity: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 613966,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 535633,
      baseXp: 589910,
      firstCompletion: new Date("2025-03-11T05:07:47.512Z"),
      highestLevel: 311945,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-03-12T10:48:24.554Z"),
      name: "<value>",
      price: 209843,
      publicId: "<id>",
      scarcity: 186193,
      steamId: 944373,
    },
  ],
  xp: {
    "key": {
      "key": 739551,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json                           |
| `mostXp`                                                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[]                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `playtime`                                                                                       | [components.V1AccountPlaytimeDataPoint](../../models/components/v1accountplaytimedatapoint.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `scarcity`                                                                                       | [components.V1AppBadge](../../models/components/v1appbadge.md)[]                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `xp`                                                                                             | Record<string, Record<string, *number*>>                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |