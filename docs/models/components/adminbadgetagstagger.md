# AdminBadgeTagsTagger

## Example Usage

```typescript
import { AdminBadgeTagsTagger } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTagger = {
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
  claims: {
    expired: 950100,
    held: 826427,
  },
  lastActive: new Date("2024-08-07T10:13:30.270Z"),
  perReview: {
    ms: 189640,
    source: "log",
  },
  tags: {
    added: 781238,
    overturned: 79002,
    removed: 917146,
  },
  work: {
    edits: 64513,
    reviews: 343004,
    revisions: 575197,
    skips: 757421,
    source: "approximate",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `account`                                                                                      | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                 | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `claims`                                                                                       | [components.AdminBadgeTagsTaggerClaims](../../models/components/adminbadgetagstaggerclaims.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastActive`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Null when the scout did nothing in the window.                                                 |
| `perReview`                                                                                    | [components.AdminBadgeTagsTaggerPace](../../models/components/adminbadgetagstaggerpace.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `tags`                                                                                         | [components.AdminBadgeTagsTaggerTags](../../models/components/adminbadgetagstaggertags.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `work`                                                                                         | [components.AdminBadgeTagsTaggerWork](../../models/components/adminbadgetagstaggerwork.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |