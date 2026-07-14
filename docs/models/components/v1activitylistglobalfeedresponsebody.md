# V1ActivityListGlobalFeedResponseBody

## Example Usage

```typescript
import { V1ActivityListGlobalFeedResponseBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListGlobalFeedResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1ActivityListGlobalFeedResponseBody.json",
  events: [
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
      accountId: 138266,
      appBadge: {
        accountInfo: {
          completionTime: new Date("2023-01-01T00:00:00Z"),
          level: 123456,
          xp: 123456,
        },
        appId: 267127,
        appImage: "<value>",
        appName: "<value>",
        badgeId: "<id>",
        badgeImage: "<value>",
        baseLevel: 569677,
        baseXp: 451732,
        cardCount: 525700,
        firstCompletion: new Date("2025-12-05T06:35:52.464Z"),
        highestLevel: 892305,
        isEvent: true,
        isFoil: true,
        isNmc: false,
        isSale: false,
        lastCompletion: new Date("2026-01-21T07:57:03.775Z"),
        name: "<value>",
        noListing: true,
        price: 499252,
        scarcity: 372005,
        steamId: 138718,
        trackedHolders: 449229,
      },
      eventType: "<value>",
      occurredAt: new Date("2024-06-24T11:50:01.187Z"),
      rank: {
        bucket: "<value>",
        current: 524914,
        leaderboard: "<value>",
        location: {
          countryCode: "DE",
          countryName: "Germany",
          region: "Europe",
          type: "<value>",
        },
        previous: 751062,
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/V1ActivityListGlobalFeedResponseBody.json  |
| `events`                                                                     | [components.V1ActivityEvent](../../models/components/v1activityevent.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `nextCursor`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Pass as cursor to fetch the next page. Absent when there are no more events. |                                                                              |