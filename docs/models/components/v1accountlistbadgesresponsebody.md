# V1AccountListBadgesResponseBody

## Example Usage

```typescript
import { V1AccountListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListBadgesResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 450708,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 339393,
      baseXp: 56565,
      firstCompletion: new Date("2024-03-10T13:52:34.450Z"),
      highestLevel: 349849,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2024-12-12T22:38:08.219Z"),
      name: "<value>",
      price: 332343,
      scarcity: 315543,
      steamId: 320559,
    },
  ],
  pages: 1,
  totalHits: 1,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/V1AccountListBadgesResponseBody.json |
| `badges`                                                               | [components.V1AppBadge](../../models/components/v1appbadge.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `pages`                                                                | *number*                                                               | :heavy_check_mark:                                                     | The number of pages                                                    | 1                                                                      |
| `totalHits`                                                            | *number*                                                               | :heavy_check_mark:                                                     | The total number of hits for all pages                                 | 1                                                                      |