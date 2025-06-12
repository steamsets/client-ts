# V1BadgeListAccountsResponseBody

## Example Usage

```typescript
import { V1BadgeListAccountsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeListAccountsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeListAccountsResponseBody.json",
  accounts: [],
  badge: {
    appId: 730,
    appImage:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
    appName: "Counter-Strike: Global Offensive",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
    isFoil: true,
    level: 15,
    name: "Counter-Strike: Global Offensive",
  },
  totalAccounts: 807022,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/V1BadgeListAccountsResponseBody.json                 |
| `accounts`                                                                             | [components.V1BadgeAccount](../../models/components/v1badgeaccount.md)[]               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `badge`                                                                                | [components.V1LeaderboardBadgeInfo](../../models/components/v1leaderboardbadgeinfo.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `totalAccounts`                                                                        | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |