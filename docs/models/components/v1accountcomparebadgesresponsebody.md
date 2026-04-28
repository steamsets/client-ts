# V1AccountCompareBadgesResponseBody

## Example Usage

```typescript
import { V1AccountCompareBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCompareBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json",
  accounts: [
    {
      accountId: 550295,
      avatar: "https://loremflickr.com/1695/3785?lock=1699480015362621",
      steamId: "<id>",
    },
  ],
  pages: 1,
  totalHits: 1,
  tuples: [
    {
      accounts: [
        {
          level: 66480,
          steamId: "<id>",
          xp: 418270,
        },
      ],
      appId: 364190,
      appImage: "<value>",
      appName: "<value>",
      appType: "<value>",
      badgeImage: "<value>",
      badgeName: "<value>",
      isEvent: false,
      isFoil: true,
      isSale: true,
      maxLevel: 258530,
      scarcity: 303219,
      steamId: 556181,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json  |
| `accounts`                                                                 | [components.ResolvedAccount](../../models/components/resolvedaccount.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `pages`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | The number of pages                                                        | 1                                                                          |
| `totalHits`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | The total number of hits for all pages                                     | 1                                                                          |
| `tuples`                                                                   | [components.ComparedTuple](../../models/components/comparedtuple.md)[]     | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |