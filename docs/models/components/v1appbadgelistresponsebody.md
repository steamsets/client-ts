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
      appId: 706575,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 414857,
      baseXp: 360545,
      firstCompletion: new Date("2025-06-27T04:59:29.330Z"),
      highestLevel: 924967,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-02-20T10:10:34.700Z"),
      name: "<value>",
      price: 232627,
      scarcity: 348519,
      steamId: 814967,
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `dollarSchema`                                                    | *string*                                                          | :heavy_minus_sign:                                                | A URL to the JSON Schema for this object.                         | https://api.steamsets.com/schemas/V1AppBadgeListResponseBody.json |
| `badges`                                                          | [components.V1AppBadge](../../models/components/v1appbadge.md)[]  | :heavy_check_mark:                                                | The available badges                                              |                                                                   |