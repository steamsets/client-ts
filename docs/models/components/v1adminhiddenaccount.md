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
  blockedLogins: 3,
  feedback: {
    comment: "I don't want my inventory on a public site",
    reason: "privacy",
  },
  hiddenAt: new Date("2026-11-22T09:45:00Z"),
  hideReason: "People keep messaging me about my badges",
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
    bans: 679460,
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
    gameBans: 700054,
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
    roles: [],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 838574,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 869956,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |
| `blockedLogins`                                                                                                                                                                 | *number*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | How many sign-ins account.login refused while the restriction was in force                                                                                                      | 3                                                                                                                                                                               |
| `feedback`                                                                                                                                                                      | [components.V1AdminOptOutFeedback](../../models/components/v1adminoptoutfeedback.md)                                                                                            | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |
| `hiddenAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_check_mark:                                                                                                                                                              | When the account went hidden for its kind: when the opt-out or restriction was applied, else when the owner last hid it. Null for an owner hide from before hides were recorded | 2026-11-22T09:45:00Z                                                                                                                                                            |
| `hideReason`                                                                                                                                                                    | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | What the account wrote when it last hid its profile. Null for hides from before the reason was required                                                                         | People keep messaging me about my badges                                                                                                                                        |
| `kind`                                                                                                                                                                          | [components.V1AdminHiddenAccountKind](../../models/components/v1adminhiddenaccountkind.md)                                                                                      | :heavy_check_mark:                                                                                                                                                              | owner when the owner hid the account, self for an opt-out, staff for a restriction staff applied                                                                                | self                                                                                                                                                                            |
| `lastBlockedLoginAt`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_check_mark:                                                                                                                                                              | When account.login last refused a sign-in. Null when it never did                                                                                                               |                                                                                                                                                                                 |
| `reason`                                                                                                                                                                        | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The stored restriction reason, staff-facing. Null when the owner hid the account                                                                                                | Self-service opt-out (GDPR)                                                                                                                                                     |
| `restrictedAt`                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                   | :heavy_check_mark:                                                                                                                                                              | When the restriction was first applied. Null when the owner hid the account                                                                                                     | 2026-10-01T12:00:00Z                                                                                                                                                            |
| `restrictedBy`                                                                                                                                                                  | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |