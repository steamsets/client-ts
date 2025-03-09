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
      appId: 863856,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 117531,
      baseXp: 517379,
      firstCompletion: new Date("2023-05-25T17:55:10.089Z"),
      highestLevel: 716860,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-03-10T01:57:15.921Z"),
      name: "<value>",
      price: 565421,
      scarcity: 183280,
      steamId: 144847,
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
      appId: 488056,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 355613,
      baseXp: 940432,
      firstCompletion: new Date("2025-04-18T19:06:55.714Z"),
      highestLevel: 748664,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-09-17T11:26:38.524Z"),
      name: "<value>",
      price: 83422,
      scarcity: 552193,
      steamId: 584476,
    },
  ],
  xp: {
    "key": {
      "key": 961937,
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