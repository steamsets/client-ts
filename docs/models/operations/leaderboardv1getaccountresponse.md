# LeaderboardV1GetAccountResponse

## Example Usage

```typescript
import { LeaderboardV1GetAccountResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetAccountResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountLeaderboardResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountLeaderboardResponseBody.json",
    accounts: [
      {
        appCost: 123456,
        appPlaytime: 1000,
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        averagePlaytime: 123456,
        awardsGiven: 123456,
        awardsReceived: 123456,
        badgeInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        badges: 123456,
        bans: 612096,
        city: {
          code: "DE",
          id: 1,
          name: "Germany",
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
        gameBans: 616934,
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
        rank: 1,
        region: {
          code: "DE",
          id: 1,
          name: "Germany",
        },
        roles: [
          {
            color: "#ff0000",
            icon: "tier_1.svg",
            name: "Tier 1",
            rating: 943749,
            role: "contributor",
          },
        ],
        state: {
          code: "DE",
          id: 1,
          name: "Germany",
        },
        steamId: "76561198842603734",
        steamSetsScore: 359508,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 437032,
        xp: 123456,
      },
    ],
    app: {
      id: 730,
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      name: "Counter-Strike: Global Offensive",
      type: "game",
    },
    badgeInfo: {
      appId: 730,
      appImage:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      appName: "Counter-Strike: Global Offensive",
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      isFoil: true,
      level: 15,
      name: "Counter-Strike: Global Offensive",
    },
    location: [
      {
        cityName: "Bad Krozingen",
        countryCode: "DE",
        countryName: "Germany",
        region: "Europe",
        stateName: "Baden-Wurttemberg",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `v1AccountLeaderboardResponseBody`                                                                         | [components.V1AccountLeaderboardResponseBody](../../models/components/v1accountleaderboardresponsebody.md) | :heavy_minus_sign:                                                                                         | OK                                                                                                         |