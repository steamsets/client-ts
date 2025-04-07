# V1AppListBadgesResponseBody

## Example Usage

```typescript
import { V1AppListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AppListBadgesResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 337125,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 599350,
      baseXp: 701327,
      firstCompletion: new Date("2023-08-20T11:55:43.684Z"),
      highestLevel: 505247,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-04-17T21:19:12.478Z"),
      name: "<value>",
      price: 564362,
      scarcity: 624092,
      steamId: 362423,
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dollarSchema`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | A URL to the JSON Schema for this object.                          | https://api.steamsets.com/schemas/V1AppListBadgesResponseBody.json |
| `badges`                                                           | [components.V1AppBadge](../../models/components/v1appbadge.md)[]   | :heavy_check_mark:                                                 | The available badges                                               |                                                                    |