# V1AdminGetAccountResponseBody

## Example Usage

```typescript
import { V1AdminGetAccountResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json",
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  connections: [],
  cosmetics: {
    nameEffect: "rainbow",
    themeColor: "#FF5733",
  },
  developerApps: [],
  donations: {
    custom: 2500,
    patreon: 1000,
  },
  email: "steamsets@example.com",
  hidden: false,
  location: {
    city: "Bad Krozingen",
    country: "DE",
    region: "Europe",
    state: "Baden-Wurttemberg",
  },
  locationUpdates: [],
  name: "steamsets",
  nameUpdates: [
    {
      name: {
        new: "steamsets",
        old: "steamsets",
      },
      updatedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
  note: {
    author: {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 988220,
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
      gameBans: 661918,
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
      steamSetsScore: 946412,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
      },
      themeColor: "#FF5733",
      vacBans: 332325,
      xp: 123456,
    },
    text: "<value>",
    updatedAt: new Date("2026-11-17T13:56:01.627Z"),
  },
  privacy: "public",
  resources: [],
  restriction: {
    blockedLogins: 0,
    lastBlockedLoginAt: new Date("2025-10-14T22:36:45.235Z"),
    reason: "<value>",
    restrictedAt: new Date("2025-04-15T06:52:44.154Z"),
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
  },
  roles: null,
  sessions: [
    {
      createdAt: new Date("2023-01-01T00:00:00Z"),
      expiresAt: new Date("2023-01-01T00:00:00Z"),
      ip: "127.0.0.1",
      lastSeen: new Date("2023-01-01T00:00:00Z"),
      location: {
        city: "Berlin",
        countryCode: "DE",
        countryName: "Germany",
        region: "Berlin",
      },
      sessionId: "123456",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  ],
  tierOverride: {
    createdAt: new Date("2025-03-30T08:33:25.318Z"),
    createdBy: {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 420323,
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
      gameBans: 916174,
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
      steamSetsScore: 679460,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
      },
      themeColor: "#FF5733",
      vacBans: 877992,
      xp: 123456,
    },
    reason: "PayPal donation",
    tier: "tier_2",
  },
  vanity: "steamsets",
  vanityUpdates: [
    {
      updatedAt: new Date("2023-01-01T00:00:00Z"),
      vanity: {
        new: "steamsets",
        old: "steamsets",
      },
    },
  ],
  visibilityUpdates: [
    {
      kind: "profile",
      updatedAt: new Date("2023-01-01T00:00:00Z"),
      visibility: {
        new: "steamsets",
        old: "steamsets",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A URL to the JSON Schema for this object.                                                                          | https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json                                               |
| `avatar`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The avatar of the account                                                                                          | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg                                                                               |
| `connections`                                                                                                      | [components.Connection](../../models/components/connection.md)[]                                                   | :heavy_check_mark:                                                                                                 | The connections the account has                                                                                    |                                                                                                                    |
| `cosmetics`                                                                                                        | [components.V1AdminGetAccountCosmetics](../../models/components/v1admingetaccountcosmetics.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `developerApps`                                                                                                    | [components.DeveloperApp](../../models/components/developerapp.md)[]                                               | :heavy_check_mark:                                                                                                 | The developer apps the account has                                                                                 |                                                                                                                    |
| `donations`                                                                                                        | [components.V1AdminGetAccountDonations](../../models/components/v1admingetaccountdonations.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the account                                                                                           | steamsets@example.com                                                                                              |
| `hidden`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether the account has hidden itself from steamsets leaderboards                                                  | false                                                                                                              |
| `location`                                                                                                         | [components.V1AdminGetAccountLocation](../../models/components/v1admingetaccountlocation.md)                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `locationUpdates`                                                                                                  | [components.V1AccountLocationUpdate](../../models/components/v1accountlocationupdate.md)[]                         | :heavy_check_mark:                                                                                                 | The location updates the account has                                                                               |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the account                                                                                            | steamsets                                                                                                          |
| `nameUpdates`                                                                                                      | [components.V1AccountNameUpdate](../../models/components/v1accountnameupdate.md)[]                                 | :heavy_check_mark:                                                                                                 | The name updates the account has                                                                                   |                                                                                                                    |
| `note`                                                                                                             | [components.V1AdminGetAccountNote](../../models/components/v1admingetaccountnote.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `privacy`                                                                                                          | [components.V1AdminGetAccountResponseBodyPrivacy](../../models/components/v1admingetaccountresponsebodyprivacy.md) | :heavy_check_mark:                                                                                                 | The privacy of the account                                                                                         | public                                                                                                             |
| `resources`                                                                                                        | [components.AdminAccountResource](../../models/components/adminaccountresource.md)[]                               | :heavy_check_mark:                                                                                                 | Every resource, one entry each, with the value that applies and where it comes from                                |                                                                                                                    |
| `restriction`                                                                                                      | [components.V1AdminGetAccountRestriction](../../models/components/v1admingetaccountrestriction.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `roles`                                                                                                            | [components.Role](../../models/components/role.md)[]                                                               | :heavy_check_mark:                                                                                                 | The roles the account has                                                                                          |                                                                                                                    |
| `sessions`                                                                                                         | [components.Session](../../models/components/session.md)[]                                                         | :heavy_check_mark:                                                                                                 | The sessions the account has                                                                                       |                                                                                                                    |
| `tierOverride`                                                                                                     | [components.AdminTierOverride](../../models/components/admintieroverride.md)                                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `vanity`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The vanity of the account                                                                                          | steamsets                                                                                                          |
| `vanityUpdates`                                                                                                    | [components.V1AccountVanityUpdate](../../models/components/v1accountvanityupdate.md)[]                             | :heavy_check_mark:                                                                                                 | The vanity updates the account has                                                                                 |                                                                                                                    |
| `visibilityUpdates`                                                                                                | [components.V1AccountVisibilityUpdate](../../models/components/v1accountvisibilityupdate.md)[]                     | :heavy_check_mark:                                                                                                 | The profile-visibility and steamsets-hidden changes the account has, newest first                                  |                                                                                                                    |