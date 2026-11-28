# AdminBadgeTagsQueueSkipped

## Example Usage

```typescript
import { AdminBadgeTagsQueueSkipped } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsQueueSkipped = {
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
  skippedAt: new Date("2026-01-09T21:33:31.172Z"),
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badge`                                                                                       | [components.AdminBadgeTagsBadge](../../models/components/adminbadgetagsbadge.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `skippedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `skippedBy`                                                                                   | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |