# AdminAccountResource

## Example Usage

```typescript
import { AdminAccountResource } from "@steamsets/client-ts/models/components";

let value: AdminAccountResource = {
  inherited: {
    role: "diamond",
    value: "600000",
  },
  otherRoles: [],
  override: {
    updatedAt: new Date("2024-09-29T09:25:17.669Z"),
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
  },
  resource: "vanity",
  role: "diamond",
  source: "role",
  value: "600000",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `inherited`                                                                                                    | [components.AdminAccountResourceInherited](../../models/components/adminaccountresourceinherited.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `otherRoles`                                                                                                   | [components.AdminAccountResourceRoleValue](../../models/components/adminaccountresourcerolevalue.md)[]         | :heavy_check_mark:                                                                                             | Values from the account's other roles that lose to the one in inherited, highest rating first                  |                                                                                                                |
| `override`                                                                                                     | [components.AdminAccountResourceOverride](../../models/components/adminaccountresourceoverride.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `resource`                                                                                                     | [components.AdminAccountResourceResource](../../models/components/adminaccountresourceresource.md)             | :heavy_check_mark:                                                                                             | The resource                                                                                                   |                                                                                                                |
| `role`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The role the value comes from, when source is role                                                             | diamond                                                                                                        |
| `source`                                                                                                       | [components.AdminAccountResourceSource](../../models/components/adminaccountresourcesource.md)                 | :heavy_check_mark:                                                                                             | Where the value comes from                                                                                     | role                                                                                                           |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The value that applies, or null when no override or held role grants the resource and the code default applies | 600000                                                                                                         |