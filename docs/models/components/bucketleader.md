# BucketLeader

## Example Usage

```typescript
import { BucketLeader } from "@steamsets/client-ts/models/components";

let value: BucketLeader = {
  account: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 337406,
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
    gameBans: 747187,
    isHidden: false,
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
        extras: {},
        rating: 418270,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 121724,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 325508,
    xp: 123456,
  },
  empty: false,
  from: 10,
  open: false,
  rank: 312,
  score: 6342,
  to: 19,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `account`                                                                                         | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                    | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `empty`                                                                                           | *boolean*                                                                                         | :heavy_check_mark:                                                                                | No account in this bucket within the scope                                                        | false                                                                                             |
| `from`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | Inclusive bucket lower bound in the leaderboard's native unit (level for xp, game count for apps) | 10                                                                                                |
| `open`                                                                                            | *boolean*                                                                                         | :heavy_check_mark:                                                                                | True when the bucket has no upper bound (e.g. the top apps tier); render as 'from+'.              | false                                                                                             |
| `rank`                                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 312                                                                                               |
| `score`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 6342                                                                                              |
| `to`                                                                                              | *number*                                                                                          | :heavy_check_mark:                                                                                | Inclusive bucket upper bound in the leaderboard's native unit. Ignore when open=true.             | 19                                                                                                |