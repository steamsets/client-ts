# V1AdminVisibilityEvent

## Example Usage

```typescript
import { V1AdminVisibilityEvent } from "@steamsets/client-ts/models/components";

let value: V1AdminVisibilityEvent = {
  at: new Date("2026-11-22T09:34:54Z"),
  by: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 110957,
    city: {
      name: "Bad Krozingen",
    },
    country: null,
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 843534,
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
    roles: null,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 58648,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 840591,
    xp: 123456,
  },
  event: "hidden",
  reason: "osint privacy concerns",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `at`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | When it happened                                                                                                     | 2026-11-22T09:34:54Z                                                                                                 |
| `by`                                                                                                                 | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `event`                                                                                                              | [components.Event](../../models/components/event.md)                                                                 | :heavy_check_mark:                                                                                                   | hidden and visible are the owner's toggle, opted_out the opt-out in force, restricted and lifted a staff restriction | hidden                                                                                                               |
| `reason`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | What the owner wrote when hiding, or the staff reason. Null when there is none                                       | osint privacy concerns                                                                                               |