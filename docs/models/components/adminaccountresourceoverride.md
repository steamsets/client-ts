# AdminAccountResourceOverride

## Example Usage

```typescript
import { AdminAccountResourceOverride } from "@steamsets/client-ts/models/components";

let value: AdminAccountResourceOverride = {
  updatedAt: new Date("2024-11-03T14:34:34.778Z"),
  updatedBy: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 624977,
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
    gameBans: 774893,
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
    steamSetsScore: 354885,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 420323,
    xp: 123456,
  },
  value: "60000",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff set the override. Null on overrides set before this was recorded                   |                                                                                               |
| `updatedBy`                                                                                   | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `value`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The override value                                                                            | 60000                                                                                         |