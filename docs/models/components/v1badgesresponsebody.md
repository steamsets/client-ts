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
      appId: 975522,
      appImage: "<value>",
      appName: "<value>",
      badgeId: "<id>",
      badgeImage: "<value>",
      baseLevel: 855804,
      baseXp: 11714,
      firstCompletion: new Date("2024-01-30T12:51:46.829Z"),
      highestLevel: 729991,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2023-07-08T02:32:49.310Z"),
      name: "<value>",
      price: 521037,
      scarcity: 54338,
      steamId: 199996,
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