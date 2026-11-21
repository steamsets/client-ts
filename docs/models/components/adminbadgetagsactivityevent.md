# AdminBadgeTagsActivityEvent

## Example Usage

```typescript
import { AdminBadgeTagsActivityEvent } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsActivityEvent = {
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
  at: new Date("2025-08-20T05:52:19.377Z"),
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
  kept: 241752,
  kind: "edit",
  modelVersion: "<value>",
  note: "<value>",
  removed: [],
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `added`                                                                                                  | [components.AdminBadgeTagsTagRef](../../models/components/adminbadgetagstagref.md)[]                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `at`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `badge`                                                                                                  | [components.AdminBadgeTagsBadge](../../models/components/adminbadgetagsbadge.md)                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Stable id of the event, also its position in the feed.                                                   |
| `kept`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Suggested colours and designs a review kept.                                                             |
| `kind`                                                                                                   | [components.AdminBadgeTagsActivityEventKind](../../models/components/adminbadgetagsactivityeventkind.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `modelVersion`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The model whose suggestions a review or skip saw, or that auto-tagged. Empty for other kinds.            |
| `note`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The skip reason, or the reason staff gave for a release or requeue. Empty when none.                     |
| `removed`                                                                                                | [components.AdminBadgeTagsTagRef](../../models/components/adminbadgetagstagref.md)[]                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `target`                                                                                                 | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |