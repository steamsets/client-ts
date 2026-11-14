# V1AdminGetAccountRestriction

## Example Usage

```typescript
import { V1AdminGetAccountRestriction } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountRestriction = {
  blockedLogins: 0,
  lastBlockedLoginAt: new Date("2026-07-28T21:21:10.832Z"),
  reason: "<value>",
  restrictedAt: new Date("2024-06-21T18:30:58.125Z"),
  restrictedBy: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 609869,
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
    gameBans: 664204,
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
        extras: {
          "key": "<value>",
          "key1": "<value>",
        },
        rating: 66480,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 365985,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 774893,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `blockedLogins`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | How many sign-ins account.login refused while the restriction was in force                    | 0                                                                                             |
| `lastBlockedLoginAt`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When account.login last refused a sign-in                                                     |                                                                                               |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The staff-facing reason for the restriction                                                   |                                                                                               |
| `restrictedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the restriction was applied                                                              |                                                                                               |
| `restrictedBy`                                                                                | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |