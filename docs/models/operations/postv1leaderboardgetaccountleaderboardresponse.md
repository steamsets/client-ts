# PostV1LeaderboardGetAccountLeaderboardResponse

## Example Usage

```typescript
import { PostV1LeaderboardGetAccountLeaderboardResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1LeaderboardGetAccountLeaderboardResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardGetAccountLeaderboardResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardGetAccountLeaderboardResponseBody.json",
    accounts: [
      {
        appCost: 123456,
        appPlaytime: 1000,
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        awardsGiven: 123456,
        awardsReceived: 123456,
        badgeInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        badges: 123456,
        bans: 820049,
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
        gameBans: 930818,
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
          id: 1,
          name: "Europe",
        },
        roles: [
          {
            rating: 51029,
            role: "developer",
          },
        ],
        state: {
          id: 1,
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 511298,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 545613,
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
    ownAccount: {
      appCost: 123456,
      appPlaytime: 1000,
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      awardsGiven: 123456,
      awardsReceived: 123456,
      badgeInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      badges: 123456,
      bans: 775185,
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
      gameBans: 40639,
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
        id: 1,
        name: "Europe",
      },
      roles: [
        {
          rating: 780052,
          role: "contributor",
        },
      ],
      state: {
        id: 1,
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 243304,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 531808,
      xp: 123456,
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `v1LeaderboardGetAccountLeaderboardResponseBody`                                                                                       | [components.V1LeaderboardGetAccountLeaderboardResponseBody](../../models/components/v1leaderboardgetaccountleaderboardresponsebody.md) | :heavy_minus_sign:                                                                                                                     | OK                                                                                                                                     |