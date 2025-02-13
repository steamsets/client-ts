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
      appId: 687488,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 215507,
      baseXp: 947371,
      firstCompletion: new Date("2025-03-12T00:25:52.109Z"),
      highestLevel: 253941,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-08-22T18:57:29.709Z"),
      name: "<value>",
      price: 518201,
      scarcity: 25662,
      steamId: 207470,
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