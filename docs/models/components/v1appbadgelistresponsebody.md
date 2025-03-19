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
      appId: 636061,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 240020,
      baseXp: 160538,
      firstCompletion: new Date("2025-05-22T20:16:52.845Z"),
      highestLevel: 959167,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-05-17T02:53:01.364Z"),
      name: "<value>",
      price: 590984,
      scarcity: 857723,
      steamId: 457223,
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json |
| `badges`                                                          | [components.V1AppBadge](../../models/components/v1appbadge.md)[]  | :heavy_check_mark:                                                | The available badges                                              |                                                                   |