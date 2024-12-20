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
      appId: 521037,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 54338,
      baseXp: 199996,
      firstCompletion: new Date("2022-01-21T07:11:50.213Z"),
      highestLevel: 793698,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-09-03T10:06:53.981Z"),
      name: "<value>",
      price: 345352,
      publicId: "<id>",
      scarcity: 928082,
      steamId: 704415,
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
      appId: 31838,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 164694,
      baseXp: 621479,
      firstCompletion: new Date("2023-09-25T15:25:14.861Z"),
      highestLevel: 237893,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-10-20T21:33:54.006Z"),
      name: "<value>",
      price: 613966,
      publicId: "<id>",
      scarcity: 535633,
      steamId: 589910,
    },
  ],
  xp: {
    "key": {
      "key": 730122,
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