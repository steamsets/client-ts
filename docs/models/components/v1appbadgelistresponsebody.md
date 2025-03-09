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
      appId: 401259,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 929292,
      baseXp: 99615,
      firstCompletion: new Date("2025-11-02T01:12:41.532Z"),
      highestLevel: 869489,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-05-12T18:17:15.678Z"),
      name: "<value>",
      price: 326701,
      scarcity: 232744,
      steamId: 614465,
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json |
| `badges`                                                          | [components.V1AppBadge](../../models/components/v1appbadge.md)[]  | :heavy_check_mark:                                                | The available badges                                              |                                                                   |