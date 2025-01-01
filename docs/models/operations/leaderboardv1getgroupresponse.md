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
          bans: 318569,
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
          gameBans: 667411,
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
              rating: 131797,
              role: "contributor",
            },
          ],
          state: {
            id: 1,
            name: "Baden-Wurttemberg",
          },
          steamId: "76561198842603734",
          steamSetsScore: 289406,
          steamSetsVanity: "steamsets",
          steamVanity: "steamsets",
          vacBans: 183191,
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
        bans: 586513,
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
        gameBans: 20107,
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
            rating: 828940,
            role: "user",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 677817,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 270008,
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