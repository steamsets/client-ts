# V1AdminHiddenAccount

## Example Usage

```typescript
import { V1AdminHiddenAccount } from "@steamsets/client-ts/models/components";

let value: V1AdminHiddenAccount = {
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
    steamSetsScore: 634507,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    themeColor: "#FF5733",
    vacBans: 121724,
    xp: 123456,
  },
  accountId: 882337740,
  blockedLogins: 3,
  feedback: {
    comment: "I don't want my inventory on a public site",
    reason: "privacy",
  },
  kind: "self",
  lastBlockedLoginAt: new Date("2026-11-11T22:31:01.776Z"),
  reason: "Self-service opt-out (GDPR)",
  restrictedAt: new Date("2026-10-01T12:00:00Z"),
  restrictedBy: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 727998,
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
    gameBans: 28025,
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
        rating: 138555,
        role: "sapphire",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 352916,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    themeColor: "#FF5733",
    vacBans: 720947,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `account`                                                                                        | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                   | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `accountId`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | The account id                                                                                   | 882337740                                                                                        |
| `blockedLogins`                                                                                  | *number*                                                                                         | :heavy_check_mark:                                                                               | How many sign-ins account.login refused while the restriction was in force                       | 3                                                                                                |
| `feedback`                                                                                       | [components.V1AdminOptOutFeedback](../../models/components/v1adminoptoutfeedback.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `kind`                                                                                           | [components.V1AdminHiddenAccountKind](../../models/components/v1adminhiddenaccountkind.md)       | :heavy_check_mark:                                                                               | owner when the owner hid the account, self for an opt-out, staff for a restriction staff applied | self                                                                                             |
| `lastBlockedLoginAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | When account.login last refused a sign-in. Null when it never did                                |                                                                                                  |
| `reason`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | The stored restriction reason, staff-facing. Null when the owner hid the account                 | Self-service opt-out (GDPR)                                                                      |
| `restrictedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | When the restriction was first applied. Null when the owner hid the account                      | 2026-10-01T12:00:00Z                                                                             |
| `restrictedBy`                                                                                   | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                   | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |