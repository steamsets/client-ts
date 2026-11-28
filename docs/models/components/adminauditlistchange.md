# AdminAuditListChange

## Example Usage

```typescript
import { AdminAuditListChange } from "@steamsets/client-ts/models/components";

let value: AdminAuditListChange = {
  account: {
    after: {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 276650,
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
      gameBans: 375243,
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
      steamSetsScore: 723104,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
        streak: 0,
      },
      themeColor: "#FF5733",
      vacBans: 163411,
      xp: 123456,
    },
    before: {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 400700,
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
      gameBans: 780260,
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
      region: null,
      roles: [],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 55316,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
        streak: 0,
      },
      themeColor: "#FF5733",
      vacBans: 636378,
      xp: 123456,
    },
  },
  after: "<value>",
  before: "<value>",
  field: "roles",
  kind: "text",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                             | [components.AdminAuditListChangePeer](../../models/components/adminauditlistchangepeer.md)                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `after`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The value after. Null when the action cleared it.                                                                     |                                                                                                                       |
| `before`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The value before. Null when it was not set.                                                                           |                                                                                                                       |
| `field`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The field the action changed, such as roles, reason or customDonations.                                               | roles                                                                                                                 |
| `kind`                                                                                                                | [components.AdminAuditListChangeKind](../../models/components/adminauditlistchangekind.md)                            | :heavy_check_mark:                                                                                                    | How to read before and after: cents is US cents, list is comma-separated, account is an account id, time is RFC 3339. |                                                                                                                       |