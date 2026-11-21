# AdminAuditListTarget

## Example Usage

```typescript
import { AdminAuditListTarget } from "@steamsets/client-ts/models/components";

let value: AdminAuditListTarget = {
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
  kind: "brand",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                         | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The target's key: an account id, a role slug (empty for the whole role list), a bot, brand or key id, a badge id. | 1216167888                                                                                                        |
| `kind`                                                                                                            | [components.AdminAuditListTargetKind](../../models/components/adminauditlisttargetkind.md)                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |