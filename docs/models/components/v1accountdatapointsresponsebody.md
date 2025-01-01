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
      appId: 453543,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 722056,
      baseXp: 866383,
      firstCompletion: new Date("2025-12-05T04:07:03.604Z"),
      highestLevel: 855804,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-01-13T20:07:38.173Z"),
      name: "<value>",
      price: 359978,
      scarcity: 729991,
      steamId: 171629,
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
      appId: 521037,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 54338,
      baseXp: 199996,
      firstCompletion: new Date("2023-01-21T07:11:50.213Z"),
      highestLevel: 793698,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-09-03T10:06:53.981Z"),
      name: "<value>",
      price: 345352,
      scarcity: 928082,
      steamId: 704415,
    },
  ],
  xp: {
    "key": {
      "key": 31838,
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