# V1GroupLeaderboardGroup

## Example Usage

```typescript
import { V1GroupLeaderboardGroup } from "@steamsets/client-ts/models/components";

let value: V1GroupLeaderboardGroup = {
  owner: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    averagePlaytime: 123456,
    awardsGiven: 123456,
    awardsReceived: 123456,
    badges: 123456,
    bans: 463575,
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
    economyBan: "steam",
    foilBadgeCost: 123456,
    foilBadges: 123456,
    friends: 123456,
    gameBans: 277628,
    hidden: true,
    level: 123456,
    limitedApps: 123456,
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
        rating: 586784,
        role: "translator",
      },
    ],
    state: {
      id: 1,
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 117531,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 517379,
    xp: 123456,
  },
  rank: 1,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `owner`                                                                        | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `rank`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | The rank of the account                                                        | 1                                                                              |