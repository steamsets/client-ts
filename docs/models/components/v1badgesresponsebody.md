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
      appId: 431418,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 896547,
      baseXp: 367562,
      firstCompletion: new Date("2024-04-22T16:59:27.579Z"),
      highestLevel: 891924,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2025-06-02T14:07:36.077Z"),
      name: "<value>",
      price: 703889,
      scarcity: 100226,
      steamId: 919483,
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