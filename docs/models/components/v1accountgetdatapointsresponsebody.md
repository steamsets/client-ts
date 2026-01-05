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
      appId: 867958,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 514697,
      baseXp: 475824,
      firstCompletion: new Date("2026-03-21T12:06:35.436Z"),
      highestLevel: 810160,
      isEvent: false,
      isFoil: true,
      isSale: false,
      lastCompletion: new Date("2026-06-30T09:04:29.673Z"),
      name: "<value>",
      price: 267368,
      scarcity: 988583,
      steamId: 586837,
    },
  ],
  playtime: null,
  scarcity: [],
  xp: {
    "key": {},
    "key1": {
      "key": 96558,
    },
    "key2": {},
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