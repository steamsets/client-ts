# AdminBadgeTagsActivityBody

## Example Usage

```typescript
import { AdminBadgeTagsActivityBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsActivityBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBadgeTagsActivityBody.json",
  events: [
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
      added: [
        {
          category: "visual",
          hex: "<value>",
          id: "<id>",
          name: "<value>",
        },
      ],
      at: new Date("2024-11-05T04:29:10.352Z"),
      badge: {
        appId: 534302,
        appName: "<value>",
        id: "<id>",
        imageUrl: "https://dependable-doorpost.biz/",
        isFoil: false,
        level: 921838,
        name: "<value>",
      },
      id: "<id>",
      kept: 621505,
      kind: "requeue",
      modelVersion: "<value>",
      note: "<value>",
      removed: [
        {
          category: "metadata",
          hex: "<value>",
          id: "<id>",
          name: "<value>",
        },
      ],
      target: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 407948,
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
        gameBans: 305296,
        isHidden: true,
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
        steamSetsScore: 966357,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 179176,
        xp: 123456,
      },
    },
  ],
  nextCursor: "<value>",
  total: 634472,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A URL to the JSON Schema for this object.                                                          | https://api.steamsets.com/schemas/AdminBadgeTagsActivityBody.json                                  |
| `events`                                                                                           | [components.AdminBadgeTagsActivityEvent](../../models/components/adminbadgetagsactivityevent.md)[] | :heavy_check_mark:                                                                                 | Newest first.                                                                                      |                                                                                                    |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | Null on the last page.                                                                             |                                                                                                    |
| `total`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |