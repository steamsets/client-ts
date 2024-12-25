# LeaderboardV1GetGroupResponse

## Example Usage

```typescript
import { LeaderboardV1GetGroupResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetGroupResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1GroupLeaderboardResponseBody: {
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
          bans: 677817,
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
          gameBans: 270008,
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
              rating: 735194,
              role: "badge_scout",
            },
          ],
          state: {
            id: 1,
            name: "Baden-Wurttemberg",
          },
          steamId: "76561198842603734",
          steamSetsScore: 248753,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          vacBans: 576157,
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
        averagePlaytime: 123456,
        awardsGiven: 123456,
        awardsReceived: 123456,
        badges: 123456,
        bans: 592042,
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
        gameBans: 572252,
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
            rating: 223081,
            role: "badge_scout",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 447125,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 846409,
        xp: 123456,
      },
      privacy: "public",
      rank: 1,
      tag: "Group Tag",
      vanity: "Group Vanity",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1GroupLeaderboardResponseBody`                                                                       | [components.V1GroupLeaderboardResponseBody](../../models/components/v1groupleaderboardresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |