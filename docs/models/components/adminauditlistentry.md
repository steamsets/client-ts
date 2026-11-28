# AdminAuditListEntry

## Example Usage

```typescript
import { AdminAuditListEntry } from "@steamsets/client-ts/models/components";

let value: AdminAuditListEntry = {
  action: "account.restrict",
  actor: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 641917,
    city: {
      name: "Bad Krozingen",
    },
    country: null,
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 350137,
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
    steamSetsScore: 959936,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 856267,
    xp: 123456,
  },
  at: new Date("2025-11-18T18:40:20.726Z"),
  changes: [],
  cursor: "<value>",
  reason: "<value>",
  target: {
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
    id: "1216167888",
    kind: "bot",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `action`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | What staff did. New actions can appear.                                                       | account.restrict                                                                              |
| `actor`                                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `changes`                                                                                     | [components.AdminAuditListChange](../../models/components/adminauditlistchange.md)[]          | :heavy_check_mark:                                                                            | The fields the action changed.                                                                |                                                                                               |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | This entry's place in the log. Pass it as cursor to read the entries after it.                |                                                                                               |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Why, as staff gave it. Empty when none was given.                                             |                                                                                               |
| `target`                                                                                      | [components.AdminAuditListTarget](../../models/components/adminauditlisttarget.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |