# V1AccountDataPointsResponseBody

## Example Usage

```typescript
import { V1AccountDataPointsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountDataPointsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json",
  mostXp: [
    {
      appId: 123456,
      badgeCompletedAt: new Date("2023-01-01T00:00:00Z"),
      badgeId: "123456",
      badgeImage: "steamsets",
      badgeIsFoil: true,
      badgeLevel: 123456,
      badgeName: "steamsets",
      badgeScarcity: 123456,
      badgeSteamID: 123456,
      badgeXP: 123456,
      image: "steamsets",
      name: "steamsets",
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
      appId: 730,
      badgeId: "bdg_123",
      badgeImage: "someHash.idk",
      badgeIsFoil: true,
      badgeLevel: 15,
      badgeName: "Sommer Sale 2024 Foil 1+",
      badgeScarcity: 15,
      image: "someHash.idk",
      name: "CS2",
    },
  ],
  xp: {
    "key": {
      "key": 270008,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A URL to the JSON Schema for this object.                                                                  | https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json                                     |
| `mostXp`                                                                                                   | [components.V1AccountBadgeMostXpDataPoint](../../models/components/v1accountbadgemostxpdatapoint.md)[]     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `playtime`                                                                                                 | [components.V1AccountPlaytimeDataPoint](../../models/components/v1accountplaytimedatapoint.md)[]           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `scarcity`                                                                                                 | [components.V1AccountBadgeScarcityDataPoint](../../models/components/v1accountbadgescarcitydatapoint.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `xp`                                                                                                       | Record<string, Record<string, *number*>>                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |