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
      appId: 677817,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 270008,
      baseXp: 735194,
      firstCompletion: new Date("2024-11-20T13:24:26.967Z"),
      highestLevel: 248753,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-09-24T11:14:33.088Z"),
      name: "<value>",
      price: 592042,
      publicId: "<id>",
      scarcity: 572252,
      steamId: 223081,
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
      appId: 952749,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 447125,
      baseXp: 846409,
      firstCompletion: new Date("2024-02-06T15:06:10.289Z"),
      highestLevel: 297437,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-06-10T22:08:16.258Z"),
      name: "<value>",
      price: 396506,
      publicId: "<id>",
      scarcity: 881104,
      steamId: 581273,
    },
  ],
  xp: {
    "key": {
      "key": 881736,
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