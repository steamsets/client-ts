# V1AccountGetDataPointsResponseBody

## Example Usage

```typescript
import { V1AccountGetDataPointsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountGetDataPointsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountGetDataPointsResponseBody.json",
  mostXp: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 288058,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 350520,
      baseXp: 703458,
      firstCompletion: new Date("2023-10-16T13:52:33.088Z"),
      highestLevel: 666328,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-01-26T14:08:15.607Z"),
      name: "<value>",
      price: 301246,
      scarcity: 182966,
      steamId: 600191,
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
      appId: 207161,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 600316,
      baseXp: 445127,
      firstCompletion: new Date("2025-10-20T01:38:32.035Z"),
      highestLevel: 218535,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-03-31T22:04:11.717Z"),
      name: "<value>",
      price: 775705,
      scarcity: 988499,
      steamId: 482290,
    },
  ],
  xp: {
    "key": {
      "key": 181312,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/V1AccountGetDataPointsResponseBody.json                        |
| `mostXp`                                                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[]                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `playtime`                                                                                       | [components.V1AccountPlaytimeDataPoint](../../models/components/v1accountplaytimedatapoint.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `scarcity`                                                                                       | [components.V1AppBadge](../../models/components/v1appbadge.md)[]                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `xp`                                                                                             | Record<string, Record<string, *number*>>                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |