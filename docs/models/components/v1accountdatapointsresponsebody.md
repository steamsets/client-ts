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
      appId: 297437,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 813798,
      baseXp: 396506,
      firstCompletion: new Date("2024-08-23T16:32:18.589Z"),
      highestLevel: 581273,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-08-24T09:10:01.050Z"),
      name: "<value>",
      price: 692532,
      publicId: "<id>",
      scarcity: 725255,
      steamId: 501324,
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
      appId: 956084,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 643990,
      baseXp: 423855,
      firstCompletion: new Date("2023-10-27T14:34:01.576Z"),
      highestLevel: 19193,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-11-27T12:37:26.320Z"),
      name: "<value>",
      price: 660174,
      publicId: "<id>",
      scarcity: 290077,
      steamId: 618016,
    },
  ],
  xp: {
    "key": {
      "key": 428769,
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