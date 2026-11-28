# AdminListBotChangesEntry

## Example Usage

```typescript
import { AdminListBotChangesEntry } from "@steamsets/client-ts/models/components";

let value: AdminListBotChangesEntry = {
  actor: {
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
    client: {
      name: "<value>",
      version: "<value>",
    },
    name: "<value>",
  },
  at: new Date("2024-11-19T01:43:55.026Z"),
  field: "features.levelQuote",
  new: "<value>",
  old: "<value>",
  reason: "<value>",
  source: "owner",
};
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              | Example                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actor`                                                                                                                                                                                                                  | [components.AdminListBotChangesActor](../../models/components/adminlistbotchangesactor.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |                                                                                                                                                                                                                          |
| `at`                                                                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |                                                                                                                                                                                                                          |
| `field`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | online, listed, website, levelRange, languages, rules, commands, payment, limits, features.<feature>, client, status, type, name, brand, owner, listingFee or billing (the plan and paidThrough). New fields can appear. | features.levelQuote                                                                                                                                                                                                      |
| `new`                                                                                                                                                                                                                    | *any*                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                       | The value after, as JSON. Null when the change cleared it.                                                                                                                                                               |                                                                                                                                                                                                                          |
| `old`                                                                                                                                                                                                                    | *any*                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                       | The value before, as JSON. Null when the field was not set.                                                                                                                                                              |                                                                                                                                                                                                                          |
| `reason`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | Why staff made the change. Empty when none was given.                                                                                                                                                                    |                                                                                                                                                                                                                          |
| `source`                                                                                                                                                                                                                 | [components.AdminListBotChangesEntrySource](../../models/components/adminlistbotchangesentrysource.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |                                                                                                                                                                                                                          |