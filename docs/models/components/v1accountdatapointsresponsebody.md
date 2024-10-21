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
      appId: 643990,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 423855,
      baseXp: 606393,
      firstCompletion: new Date("2022-01-22T00:51:28.398Z"),
      highestLevel: 301575,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-12-25T13:12:17.029Z"),
      name: "<value>",
      price: 290077,
      publicId: "<id>",
      scarcity: 618016,
      steamId: 428769,
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
      appId: 135474,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 298282,
      baseXp: 569965,
      firstCompletion: new Date("2023-10-10T14:19:01.603Z"),
      highestLevel: 574325,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-12-17T21:47:39.716Z"),
      name: "<value>",
      price: 652103,
      publicId: "<id>",
      scarcity: 431418,
      steamId: 896547,
    },
  ],
  xp: {
    "key": {
      "key": 367562,
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