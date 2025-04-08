# LeaderboardPreviewAccountRankResponse

## Example Usage

```typescript
import { LeaderboardPreviewAccountRankResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardPreviewAccountRankResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardPreviewAccountRankResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardPreviewAccountRankResponseBody.json",
    ownAccount: {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 9868,
      city: {
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      differenceToUs: 10,
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      gameBans: 648980,
      level: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      rank: 1,
      region: {
        name: "Europe",
      },
      roles: [
        {
          rating: 28707,
          role: "top_100",
        },
      ],
      score: 100,
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 52702,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 731056,
      xp: 123456,
    },
    rankedAbove: {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 788894,
      city: {
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      differenceToUs: 10,
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      gameBans: 735507,
      level: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      rank: 1,
      region: {
        name: "Europe",
      },
      roles: [
        {
          rating: 78603,
          role: "amethyst",
        },
      ],
      score: 100,
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 877615,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 425488,
      xp: 123456,
    },
    rankedBelow: {
      appCost: 123456,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badges: 123456,
      bans: 310922,
      city: {
        name: "Bad Krozingen",
      },
      country: {
        code: "DE",
        name: "Germany",
      },
      createdAt: new Date("2023-01-01T00:00:00Z"),
      differenceToUs: 10,
      donated: 123456,
      economyBan: "steam",
      foilBadgeCost: 123456,
      foilBadges: 123456,
      friends: 123456,
      gameBans: 160022,
      level: 123456,
      name: "steamsets",
      normalBadgeCost: 123456,
      normalBadges: 123456,
      playtime: 123456,
      pointsGiven: 123456,
      pointsReceived: 123456,
      privacy: "public",
      rank: 1,
      region: {
        name: "Europe",
      },
      roles: [
        {
          rating: 23049,
          role: "beta",
        },
      ],
      score: 100,
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 976681,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 12378,
      xp: 123456,
    },
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `v1LeaderboardPreviewAccountRankResponseBody`                                                                                    | [components.V1LeaderboardPreviewAccountRankResponseBody](../../models/components/v1leaderboardpreviewaccountrankresponsebody.md) | :heavy_minus_sign:                                                                                                               | OK                                                                                                                               |