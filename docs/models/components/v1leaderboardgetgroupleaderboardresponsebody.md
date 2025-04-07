# V1LeaderboardGetGroupLeaderboardResponseBody

## Example Usage

```typescript
import { V1LeaderboardGetGroupLeaderboardResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardGetGroupLeaderboardResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1LeaderboardGetGroupLeaderboardResponseBody.json",
  groups: [
    {
      avatar: "f1a1d2c3d0c9de1f2f3f4f5f6f7f8f9.jpg",
      foundedAt: new Date("2023-01-01T00:00:00Z"),
      id: 730,
      members: 100,
      name: "Group Name",
      owner: {
        appCost: 123456,
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        awardsGiven: 123456,
        awardsReceived: 123456,
        badges: 123456,
        bans: 640363,
        city: {
          id: 1,
          name: "Bad Krozingen",
        },
        country: {
          code: "DE",
          id: 1,
          name: "Germany",
        },
        createdAt: new Date("2023-01-01T00:00:00Z"),
        donated: 123456,
        economyBan: "steam",
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friends: 123456,
        gameBans: 599935,
        level: 123456,
        name: "steamsets",
        normalBadgeCost: 123456,
        normalBadges: 123456,
        playtime: 123456,
        pointsGiven: 123456,
        pointsReceived: 123456,
        privacy: "public",
        region: {
          id: 1,
          name: "Europe",
        },
        roles: [
          {
            rating: 822713,
            role: "donator",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 660923,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 747208,
        xp: 123456,
      },
      privacy: "public",
      rank: 1,
      tag: "Group Tag",
      vanity: "Group Vanity",
    },
  ],
  steamSetsGroup: {
    avatar: "f1a1d2c3d0c9de1f2f3f4f5f6f7f8f9.jpg",
    foundedAt: new Date("2023-01-01T00:00:00Z"),
    id: 730,
    members: 100,
    name: "Group Name",
    owner: {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 436186,
      city: {
        id: 1,
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      gameBans: 25309,
      level: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      region: {
        id: 1,
        name: "Europe",
      },
      roles: [
        {
          rating: 968850,
          role: "owner",
        },
      ],
      state: {
        id: 1,
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 244129,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 900711,
      xp: 123456,
    },
    privacy: "public",
    rank: 1,
    tag: "Group Tag",
    vanity: "Group Vanity",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | A URL to the JSON Schema for this object.                                                  | https://api.steamsets.com/schemas/V1LeaderboardGetGroupLeaderboardResponseBody.json        |
| `groups`                                                                                   | [components.V1GroupLeaderboardGroup](../../models/components/v1groupleaderboardgroup.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `rankedOutOf`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | The number of accounts that are ranked in the leaderboard                                  |                                                                                            |
| `steamSetsGroup`                                                                           | [components.V1GroupLeaderboardGroup](../../models/components/v1groupleaderboardgroup.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |