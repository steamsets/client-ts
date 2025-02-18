# V1AppBadgeListResponseBody

## Example Usage

```typescript
import { V1AppBadgeListResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AppBadgeListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 162954,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 638762,
      baseXp: 490305,
      firstCompletion: new Date("2025-12-20T09:26:05.215Z"),
      highestLevel: 65304,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-05-08T10:11:55.196Z"),
      name: "<value>",
      price: 288398,
      scarcity: 241418,
      steamId: 662505,
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json |
| `badges`                                                          | [components.V1AppBadge](../../models/components/v1appbadge.md)[]  | :heavy_check_mark:                                                | The available badges                                              |                                                                   |