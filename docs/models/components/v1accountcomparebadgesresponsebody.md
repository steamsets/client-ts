# V1AccountCompareBadgesResponseBody

## Example Usage

```typescript
import { V1AccountCompareBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCompareBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json",
  accounts: [
    {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 550295,
      city: {
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadges: 123456,
      friends: 123456,
      gameBans: 425629,
      level: 123456,
      miniBackground: "<value>",
      name: "steamsets",
      nameEffect: "rainbow",
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      region: {
        name: "Europe",
      },
      roles: [
        {
          extras: {
            "key": "<value>",
            "key1": "<value>",
          },
          rating: 66480,
          role: "donator",
        },
      ],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 364190,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
      },
      themeColor: "#FF5733",
      vacBans: 819000,
      xp: 123456,
    },
  ],
  pages: 1,
  totalHits: 1,
  tuples: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json        |
| `accounts`                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)[] | :heavy_check_mark:                                                               | The compared accounts, in the order they were requested                          |                                                                                  |
| `pages`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | The number of pages                                                              | 1                                                                                |
| `totalHits`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | The total number of hits for all pages                                           | 1                                                                                |
| `tuples`                                                                         | [components.ComparedTuple](../../models/components/comparedtuple.md)[]           | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |