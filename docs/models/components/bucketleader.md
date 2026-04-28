# BucketLeader

## Example Usage

```typescript
import { BucketLeader } from "@steamsets/client-ts/models/components";

let value: BucketLeader = {
  account: {
    animatedAvatar: "<value>",
    appCost: 123456,
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
    foilBadgeCost: 123456,
    foilBadges: 123456,
    friends: 123456,
    gameBans: 747187,
    images: [
      {
        active: true,
        fileName: "avatar.png",
        imageId: "img_wasd123",
        imageType: "avatar",
      },
    ],
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    normalBadgeCost: 123456,
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
        },
        rating: 530223,
        role: "top_100",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 990709,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 122687,
    xp: 123456,
  },
  accountId: 76561198000000000,
  empty: false,
  from: 10,
  rank: 312,
  score: 6342,
  to: 19,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `account`                                                                                         | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                    | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `accountId`                                                                                       | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 76561198000000000                                                                                 |
| `empty`                                                                                           | *boolean*                                                                                         | :heavy_check_mark:                                                                                | No account in this bucket within the scope                                                        | false                                                                                             |
| `from`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | Inclusive bucket lower bound in the leaderboard's native unit (level for xp, game count for apps) | 10                                                                                                |
| `rank`                                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 312                                                                                               |
| `score`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 6342                                                                                              |
| `to`                                                                                              | *number*                                                                                          | :heavy_check_mark:                                                                                | Inclusive bucket upper bound in the leaderboard's native unit                                     | 19                                                                                                |