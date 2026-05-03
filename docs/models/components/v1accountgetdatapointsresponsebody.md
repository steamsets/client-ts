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
      cardCount: 654618,
      firstCompletion: new Date("2026-06-06T22:26:54.446Z"),
      highestLevel: 524696,
      isEvent: true,
      isFoil: false,
      isNmc: false,
      isSale: false,
      lastCompletion: new Date("2026-12-19T11:40:38.622Z"),
      name: "<value>",
      noListing: false,
      price: 34072,
      scarcity: 323401,
      steamId: 318286,
    },
  ],
  playtime: [],
  scarcity: [],
  xp: {},
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