# AdminBadgeTagsOverviewBody

## Example Usage

```typescript
import { AdminBadgeTagsOverviewBody } from "@steamsets/client-ts/models/components";
import { RFCDate } from "@steamsets/client-ts/types";

let value: AdminBadgeTagsOverviewBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBadgeTagsOverviewBody.json",
  acceptance: [],
  ai: {
    accuracy: [],
    allTime: {
      badges: 202790,
      colors: 972958,
      designs: 872959,
    },
    days: [],
    lastTagged: new Date("2026-09-15T17:48:55.614Z"),
    skips: [],
    window: {
      badges: 802371,
      colors: 245628,
      designs: 971402,
    },
  },
  badges: 12281,
  changed: [
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
      changes: 80821,
      lastBy: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 484368,
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
        gameBans: 929648,
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
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 915158,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 411770,
        xp: 123456,
      },
      lastChange: new Date("2026-11-26T08:02:53.258Z"),
      scouts: 703061,
    },
  ],
  colors: [],
  days: [
    {
      date: new RFCDate("2026-11-19"),
      reviews: 651289,
      skips: 962424,
      source: "log",
    },
  ],
  designs: [
    {
      badges: 771019,
      category: "visual",
      hex: "<value>",
      id: "<id>",
      name: "<value>",
    },
  ],
  logSince: null,
  newTags: [
    {
      category: "metadata",
      createdAt: new Date("2024-03-18T17:52:02.215Z"),
      createdBy: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 611876,
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
        gameBans: 991255,
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
        region: null,
        roles: [],
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 498764,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 178713,
        xp: 123456,
      },
      id: "<id>",
      name: "<value>",
    },
  ],
  queue: {
    auto: 447928,
    expired: 917820,
    expiredScouts: 903469,
    held: 753793,
    heldScouts: 959020,
    notQueued: 884878,
    oldestPending: new Date("2025-07-01T11:21:17.682Z"),
    pending: 235091,
    reviewed: 397609,
    skipped: 806879,
  },
  untagged: 784830,
  unusedDesigns: 257980,
  vocabulary: 997283,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A URL to the JSON Schema for this object.                                                                    | https://api.steamsets.com/schemas/AdminBadgeTagsOverviewBody.json                                            |
| `acceptance`                                                                                                 | [components.AdminBadgeTagsOverviewAcceptance](../../models/components/adminbadgetagsoverviewacceptance.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `ai`                                                                                                         | [components.AdminBadgeTagsAI](../../models/components/adminbadgetagsai.md)                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `badges`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `changed`                                                                                                    | [components.AdminBadgeTagsOverviewChanged](../../models/components/adminbadgetagsoverviewchanged.md)[]       | :heavy_check_mark:                                                                                           | Badges whose tags were added and removed in the window, most changes first.                                  |                                                                                                              |
| `colors`                                                                                                     | [components.AdminBadgeTagsOverviewTag](../../models/components/adminbadgetagsoverviewtag.md)[]               | :heavy_check_mark:                                                                                           | Most used colours.                                                                                           |                                                                                                              |
| `days`                                                                                                       | [components.AdminBadgeTagsOverviewDay](../../models/components/adminbadgetagsoverviewday.md)[]               | :heavy_check_mark:                                                                                           | Oldest first; days with no review are left out.                                                              |                                                                                                              |
| `designs`                                                                                                    | [components.AdminBadgeTagsOverviewTag](../../models/components/adminbadgetagsoverviewtag.md)[]               | :heavy_check_mark:                                                                                           | Most used design and metadata tags.                                                                          |                                                                                                              |
| `logSince`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | When the review log started. Rows before it are approximate. Null before the first logged review.            |                                                                                                              |
| `newTags`                                                                                                    | [components.AdminBadgeTagsOverviewNewTag](../../models/components/adminbadgetagsoverviewnewtag.md)[]         | :heavy_check_mark:                                                                                           | Tags scouts created in the window, newest first.                                                             |                                                                                                              |
| `queue`                                                                                                      | [components.AdminBadgeTagsOverviewQueue](../../models/components/adminbadgetagsoverviewqueue.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `untagged`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Badges with no confirmed tag.                                                                                |                                                                                                              |
| `unusedDesigns`                                                                                              | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Design and metadata tags on no badge.                                                                        |                                                                                                              |
| `vocabulary`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Designs, metadata tags and colours in the vocabulary.                                                        |                                                                                                              |