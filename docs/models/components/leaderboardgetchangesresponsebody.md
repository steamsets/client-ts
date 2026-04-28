# LeaderboardGetChangesResponseBody

## Example Usage

```typescript
import { LeaderboardGetChangesResponseBody } from "@steamsets/client-ts/models/components";

let value: LeaderboardGetChangesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/LeaderboardGetChangesResponseBody.json",
  changes: [
    {
      account: {
        animatedAvatar: "<value>",
        appCost: 123456,
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 337406,
        city: {
          name: "Bad Krozingen",
        },
        country: {
          code: "DE",
          name: "Germany",
        },
        createdAt: new Date("2023-01-01T00:00:00Z"),
        donated: 123456,
        economyBan: "steam",
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friends: 123456,
        gameBans: 747187,
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
        region: {
          name: "Europe",
        },
        roles: [
          {
            extras: {
              "key": "<value>",
            },
            rating: 530223,
            role: "top_100",
          },
        ],
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 990709,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        vacBans: 122687,
        xp: 123456,
      },
      accountId: 16902,
      latestDate: new Date("2026-01-20T15:50:42.350Z"),
      newRank: 493682,
      newScore: 866355,
      oldRank: 227801,
      oldScore: 357001,
      rankDelta: 175956,
      scoreDelta: 568429,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/LeaderboardGetChangesResponseBody.json       |
| `changes`                                                                      | [components.LeaderboardChange](../../models/components/leaderboardchange.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |