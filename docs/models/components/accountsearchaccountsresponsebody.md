# AccountSearchAccountsResponseBody

## Example Usage

```typescript
import { AccountSearchAccountsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountSearchAccountsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountSearchAccountsResponseBody.json",
  accounts: [
    {
      accountId: 822292,
      appPrivacy: "<value>",
      apps: 204763,
      avatar: "https://picsum.photos/seed/8CUbQ3WITG/3965/892",
      awardsGiven: 771723,
      awardsReceived: 894956,
      city: "North Clarkhaven",
      communityBanned: false,
      country: "Kiribati",
      createdAt: 195466,
      donations: 324576,
      foilBadges: 512578,
      friendPrivacy: "<value>",
      friends: 243800,
      gameBans: 345573,
      level: 170039,
      name: "<value>",
      normalBadges: 264397,
      playtime: 257985,
      pointsGiven: 975953,
      pointsReceived: 356488,
      privacy: "<value>",
      region: "<value>",
      roles: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      state: "Arkansas",
      steamSetsScore: 580806,
      steamVanity: "<value>",
      totalBadges: 577270,
      tradeBanned: true,
      vacBans: 906540,
      vanity: "<value>",
      xp: 909539,
    },
  ],
  results: 959320,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/AccountSearchAccountsResponseBody.json |
| `accounts`                                                               | [components.Account](../../models/components/account.md)[]               | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `results`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | Number of accounts returned in this page.                                |                                                                          |