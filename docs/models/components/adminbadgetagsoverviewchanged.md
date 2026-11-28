# AdminBadgeTagsOverviewChanged

## Example Usage

```typescript
import { AdminBadgeTagsOverviewChanged } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOverviewChanged = {
  badge: {
    appId: 534302,
    appName: "<value>",
    id: "<id>",
    imageUrl: "https://dependable-doorpost.biz/",
    isFoil: false,
    level: 921838,
    name: "<value>",
  },
  changes: 128908,
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
  lastChange: new Date("2024-09-14T10:03:58.083Z"),
  scouts: 505975,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badge`                                                                                       | [components.AdminBadgeTagsBadge](../../models/components/adminbadgetagsbadge.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `changes`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Tag rows added and removed in the window.                                                     |
| `lastBy`                                                                                      | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastChange`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scouts`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |