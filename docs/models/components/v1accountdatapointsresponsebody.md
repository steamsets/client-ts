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
      appId: 183280,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 144847,
      baseXp: 488056,
      firstCompletion: new Date("2024-01-25T18:02:14.843Z"),
      highestLevel: 940432,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-04-18T19:06:55.714Z"),
      name: "<value>",
      price: 748664,
      scarcity: 903720,
      steamId: 83422,
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
      appId: 552193,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 584476,
      baseXp: 961937,
      firstCompletion: new Date("2023-11-17T04:38:54.761Z"),
      highestLevel: 240829,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-04-20T22:07:54.686Z"),
      name: "<value>",
      price: 16429,
      scarcity: 929530,
      steamId: 669917,
    },
  ],
  xp: {
    "key": {
      "key": 785153,
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