# AdminBadgeTagsQueueBody

## Example Usage

```typescript
import { AdminBadgeTagsQueueBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsQueueBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBadgeTagsQueueBody.json",
  bands: [
    {
      key: "1000+",
      nextUp: [],
      waiting: 818939,
    },
  ],
  claims: [
    {
      account: {
        animatedAvatar: "<value>",
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
        foilBadges: 123456,
        friends: 123456,
        gameBans: 747187,
        isHidden: false,
        level: 123456,
        miniBackground: "<value>",
        name: "steamsets",
        nameEffect: "rainbow",
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
            extras: {},
            rating: 418270,
            role: "donator",
          },
        ],
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 121724,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 325508,
        xp: 123456,
      },
      claimedAt: new Date("2024-04-17T04:49:54.710Z"),
      expired: 447391,
      held: 589518,
      until: new Date("2024-08-27T07:13:06.508Z"),
    },
  ],
  nextCursor: "<value>",
  skipped: [
    {
      badge: {
        appId: 534302,
        appName: "<value>",
        id: "<id>",
        imageUrl: "https://dependable-doorpost.biz/",
        isFoil: false,
        level: 921838,
        name: "<value>",
      },
      reason: "<value>",
      skippedAt: new Date("2026-08-03T09:44:06.718Z"),
      skippedBy: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 236222,
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
        foilBadges: 123456,
        friends: 123456,
        gameBans: 645985,
        isHidden: false,
        level: 123456,
        miniBackground: "<value>",
        name: "steamsets",
        nameEffect: "rainbow",
        normalBadges: 123456,
        playtime: 123456,
        pointsGiven: 123456,
        pointsReceived: 123456,
        privacy: "public",
        region: {
          name: "Europe",
        },
        roles: [],
        state: null,
        steamId: "76561198842603734",
        steamSetsScore: 981917,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 720349,
        xp: 123456,
      },
    },
  ],
  skippedTotal: 608346,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/AdminBadgeTagsQueueBody.json                                   |
| `bands`                                                                                          | [components.AdminBadgeTagsQueueBand](../../models/components/adminbadgetagsqueueband.md)[]       | :heavy_check_mark:                                                                               | Highest priority first.                                                                          |                                                                                                  |
| `claims`                                                                                         | [components.AdminBadgeTagsQueueClaim](../../models/components/adminbadgetagsqueueclaim.md)[]     | :heavy_check_mark:                                                                               | Scouts holding claims, the most expired first.                                                   |                                                                                                  |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | Null on the last skipped page.                                                                   |                                                                                                  |
| `skipped`                                                                                        | [components.AdminBadgeTagsQueueSkipped](../../models/components/adminbadgetagsqueueskipped.md)[] | :heavy_check_mark:                                                                               | Newest first.                                                                                    |                                                                                                  |
| `skippedTotal`                                                                                   | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |