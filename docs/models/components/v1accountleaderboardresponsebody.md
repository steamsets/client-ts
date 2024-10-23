# V1AccountLeaderboardResponseBody

## Example Usage

```typescript
import { V1AccountLeaderboardResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardResponseBody = {
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
      bans: 253941,
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
      gameBans: 213312,
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
        id: 1,
        name: "Europe",
      },
      roles: [
        {
          rating: 518201,
          role: "user",
        },
      ],
      state: {
        id: 1,
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 207470,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 424685,
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
    averagePlaytime: 123456,
    awardsGiven: 123456,
    awardsReceived: 123456,
    badgeInfo: {
      completionTime: new Date("2023-01-01T00:00:00Z"),
      level: 123456,
      xp: 123456,
    },
    badges: 123456,
    bans: 374170,
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
    gameBans: 463575,
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
      id: 1,
      name: "Europe",
    },
    roles: [
      {
        rating: 277628,
        role: "ruby",
      },
    ],
    state: {
      id: 1,
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 863856,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 117531,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A URL to the JSON Schema for this object.                                                          | https://api.steamsets.com/schemas/V1AccountLeaderboardResponseBody.json                            |
| `accounts`                                                                                         | [components.V1AccountLeaderboardAccount](../../models/components/v1accountleaderboardaccount.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `app`                                                                                              | [components.V1LeaderboardAppInfo](../../models/components/v1leaderboardappinfo.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `badgeInfo`                                                                                        | [components.V1LeaderboardBadgeInfo](../../models/components/v1leaderboardbadgeinfo.md)             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `location`                                                                                         | [components.V1LeaderboardLocationInfo](../../models/components/v1leaderboardlocationinfo.md)[]     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `ownAccount`                                                                                       | [components.V1AccountLeaderboardAccount](../../models/components/v1accountleaderboardaccount.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |