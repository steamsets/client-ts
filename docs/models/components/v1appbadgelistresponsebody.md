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
      appId: 327720,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 756779,
      baseXp: 636061,
      firstCompletion: new Date("2023-09-21T01:29:35.775Z"),
      highestLevel: 160538,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-05-22T20:16:52.845Z"),
      name: "<value>",
      price: 959167,
      scarcity: 458139,
      steamId: 590984,
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json |
| `badges`                                                          | [components.V1AppBadge](../../models/components/v1appbadge.md)[]  | :heavy_check_mark:                                                | The available badges                                              |                                                                   |