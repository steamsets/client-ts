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
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      averagePlaytime: 123456,
      awardsGiven: 123456,
      awardsReceived: 123456,
      badgeInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
      },
      badges: 123456,
      bans: 848009,
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
      gameBans: 807319,
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
          colorr: "#ff0000",
          icon: "tier_1.svg",
          name: "Tier 1",
          rating: 569101,
          role: "amethyst",
        },
      ],
      state: {
        code: "DE",
        id: 1,
        name: "Germany",
      },
      steamId: "76561198842603734",
      steamSetsScore: 69167,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      vacBans: 697429,
      xp: 123456,
    },
  ],
  app: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    averagePlaytime: 123456,
    awardsGiven: 123456,
    awardsReceived: 123456,
    badgeInfo: {
      completionTime: new Date("2023-01-01T00:00:00Z"),
      level: 123456,
    },
    badges: 123456,
    bans: 453543,
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
    gameBans: 722056,
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
      code: "DE",
      id: 1,
      name: "Germany",
    },
    roles: [
      {
        colorr: "#ff0000",
        icon: "tier_1.svg",
        name: "Tier 1",
        rating: 866383,
        role: "translator",
      },
    ],
    state: {
      code: "DE",
      id: 1,
      name: "Germany",
    },
    steamId: "76561198842603734",
    steamSetsScore: 855804,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 11714,
    xp: 123456,
  },
  location: {
    city: "Bad Krozingen",
    country: "Germany",
    region: "Europe",
    state: "Baden-Wurttemberg",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/V1AccountLeaderboardResponseBody.json                              |
| `accounts`                                                                                           | [components.V1AccountLeaderboardAccount](../../models/components/v1accountleaderboardaccount.md)[]   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `app`                                                                                                | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `badgeInfo`                                                                                          | [components.V1AccountLeaderboardBadgeInfo](../../models/components/v1accountleaderboardbadgeinfo.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `location`                                                                                           | [components.V1LeaderboardLocation](../../models/components/v1leaderboardlocation.md)                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |