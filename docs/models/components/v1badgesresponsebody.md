# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 117531,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 517379,
      baseXp: 132068,
      firstCompletion: new Date("2025-02-24T16:16:37.395Z"),
      highestLevel: 396060,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-09-11T16:50:31.874Z"),
      name: "<value>",
      price: 183280,
      scarcity: 144847,
      steamId: 488056,
    },
  ],
  pages: 1,
  totalHits: 1,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgesResponseBody.json      |
| `badges`                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `pages`                                                          | *number*                                                         | :heavy_check_mark:                                               | The number of pages                                              | 1                                                                |
| `totalHits`                                                      | *number*                                                         | :heavy_check_mark:                                               | The total number of hits for all pages                           | 1                                                                |