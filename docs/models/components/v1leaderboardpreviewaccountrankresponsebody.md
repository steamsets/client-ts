# V1LeaderboardPreviewAccountRankResponseBody

## Example Usage

```typescript
import { V1LeaderboardPreviewAccountRankResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardPreviewAccountRankResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1LeaderboardPreviewAccountRankResponseBody.json",
  ownAccount: null,
  rankedAbove: {
    animatedAvatar: "<value>",
    appCost: 123456,
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 28707,
    city: {
      name: "Bad Krozingen",
    },
    country: null,
    createdAt: new Date("2023-01-01T00:00:00Z"),
    differenceToUs: 10,
    donated: 123456,
    economyBan: "steam",
    foilBadgeCost: 123456,
    foilBadges: 123456,
    friends: 123456,
    gameBans: 731056,
    images: [
      {
        active: true,
        fileName: "avatar.png",
        imageId: "img_wasd123",
        imageType: "avatar",
      },
    ],
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    normalBadgeCost: 123456,
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    rank: 1,
    region: null,
    roles: [
      {
        extras: {
          "key": "<value>",
        },
        rating: 590189,
        role: "badge_scout",
      },
    ],
    score: 100,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 310922,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    vacBans: 160022,
    xp: 123456,
  },
  rankedBelow: null,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/V1LeaderboardPreviewAccountRankResponseBody.json |
| `ownAccount`                                                                       | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `rankedAbove`                                                                      | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `rankedBelow`                                                                      | [components.PreviewAccount](../../models/components/previewaccount.md)             | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `rankedOutOf`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of accounts that are ranked in the leaderboard                          |                                                                                    |