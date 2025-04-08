# V1LeaderboardPreviewAccountRankResponseBody

## Example Usage

```typescript
import { V1LeaderboardPreviewAccountRankResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardPreviewAccountRankResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1LeaderboardPreviewAccountRankResponseBody.json",
  ownAccount: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    awardsGiven: 123456,
    awardsReceived: 123456,
    badges: 123456,
    bans: 175170,
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
    gameBans: 767700,
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
        rating: 333847,
        role: "contributor",
      },
    ],
    score: 100,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 504799,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 956761,
    xp: 123456,
  },
  rankedAbove: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    awardsGiven: 123456,
    awardsReceived: 123456,
    badges: 123456,
    bans: 613945,
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
    gameBans: 924557,
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
        rating: 61019,
        role: "badge_scout",
      },
    ],
    score: 100,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 249315,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 917283,
    xp: 123456,
  },
  rankedBelow: {
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    awardsGiven: 123456,
    awardsReceived: 123456,
    badges: 123456,
    bans: 306707,
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
    gameBans: 884682,
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
        rating: 197915,
        role: "early_supporter",
      },
    ],
    score: 100,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 413433,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 658724,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/V1LeaderboardPreviewAccountRankResponseBody.json |
| `ownAccount`                                                                       | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `rankedAbove`                                                                      | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `rankedBelow`                                                                      | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `rankedOutOf`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of accounts that are ranked in the leaderboard                          |                                                                                    |