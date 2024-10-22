# V1GroupLeaderboardResponseBody

## Example Usage

```typescript
import { V1GroupLeaderboardResponseBody } from "@steamsets/client-ts/models/components";

let value: V1GroupLeaderboardResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1GroupLeaderboardResponseBody.json",
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
        averagePlaytime: 123456,
        awardsGiven: 123456,
        awardsReceived: 123456,
        badges: 123456,
        bans: 213312,
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
        gameBans: 518201,
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
            rating: 25662,
            role: "developer",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 424685,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 374170,
        xp: 123456,
      },
      privacy: "public",
      rank: 1,
      tag: "Group Tag",
      vanity: "Group Vanity",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | A URL to the JSON Schema for this object.                                                  | https://api.steamsets.com/schemas/V1GroupLeaderboardResponseBody.json                      |
| `groups`                                                                                   | [components.V1GroupLeaderboardGroup](../../models/components/v1groupleaderboardgroup.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |