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
    supporterStreak: 0,
    themeColor: "#FF5733",
  },
  country: {
    nextChangeAt: new Date("2024-08-10T09:13:06.641Z"),
    override: {
      code: "DE",
      name: "Germany",
    },
    steam: {
      code: "DE",
      name: "Germany",
    },
  },
  developerApps: [
    {
      access: {
        allBots: false,
        botSteamIds: [
          "76561199756787903",
        ],
        kind: "push",
        listingIds: [
          "web_3cVFAKxh8Q2ZqkTq",
        ],
        scope: "bots",
      },
      analytics: {
        last24Hours: {
          failedRequests: 358,
          outcomeBreakdown: [],
          successRate: 96.5,
          successfulRequests: 9876,
          totalRequests: 10234,
        },
        timeSeries: {
          daily: [],
          hourly: [
            {
              count: 423,
              outcome: "VALID",
              time: new Date("2024-01-15T00:00:00.000Z"),
            },
          ],
        },
      },
      apiKey: "null",
      createdAt: new Date("2023-01-01T00:00:00Z"),
      description: "My App Description",
      environment: "production",
      id: "key_123456",
      keyId: "key_123456",
      lastUsedAt: new Date("2024-01-15T13:00:00Z"),
      name: "My App",
      start: "ssbot_7Hq2",
    },
  ],
  donations: {
    custom: 2500,
    patreon: 1000,
  },
  email: "steamsets@example.com",
  hidden: false,
  hiddenAt: new Date("2026-11-22T09:34:54Z"),
  hideReason: "People keep messaging me about my badges",
  location: {
    city: "Bad Krozingen",
    country: "DE",
    region: "Europe",
    state: "Baden-Wurttemberg",
  },
  locationUpdates: [
    {
      city: {
        new: "steamsets",
        old: "steamsets",
      },
      countryCode: {
        new: "steamsets",
        old: "steamsets",
      },
      countryName: {
        new: "steamsets",
        old: "steamsets",
      },
      region: {
        new: "steamsets",
        old: "steamsets",
      },
      state: {
        new: "steamsets",
        old: "steamsets",
      },
      updatedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
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
      bans: 703341,
      city: {
        name: "Bad Krozingen",
      },
      country: null,
      createdAt: new Date("2023-01-01T00:00:00Z"),
      donated: 123456,
      economyBan: "steam",
      foilBadges: 123456,
      friends: 123456,
      gameBans: 588855,
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
      steamSetsScore: 106511,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
        streak: 0,
      },
      themeColor: "#FF5733",
      vacBans: 627597,
      xp: 123456,
    },
    text: "<value>",
    updatedAt: new Date("2025-10-14T22:36:45.235Z"),
  },
  optOutFeedback: {
    comment: "I don't want people looking up my profile",
    reason: "other",
    requestedAt: new Date("2026-10-01T12:00:00Z"),
  },
  privacy: "public",
  resources: [
    {
      inherited: {
        role: "diamond",
        value: "600000",
      },
      otherRoles: [
        {
          role: "donator",
          value: "2500",
        },
      ],
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
      resource: "max_find_owners",
      role: "diamond",
      source: "role",
      value: "600000",
    },
  ],
  restriction: {
    blockedLogins: 0,
    kind: "staff",
    lastBlockedLoginAt: new Date("2024-01-19T20:11:21.399Z"),
    reason: "<value>",
    restrictedAt: new Date("2026-09-15T16:27:25.763Z"),
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
  },
  roles: [],
  sessions: [],
  tierOverride: {
    createdAt: new Date("2024-12-20T22:47:31.095Z"),
    createdBy: {
      animatedAvatar: "<value>",
      apps: 123456,
      avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
      avatarFrame: "<value>",
      awardsGiven: 123456,
      awardsReceived: 123456,
      background: "<value>",
      badges: 123456,
      bans: 611876,
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
      gameBans: 991255,
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
      region: null,
      roles: [],
      state: {
        name: "Baden-Wurttemberg",
      },
      steamId: "76561198842603734",
      steamSetsScore: 498764,
      steamSetsVanity: "steamsets",
      steamVanity: "steamsets",
      supporter: {
        active: true,
        months: 3,
        streak: 0,
      },
      themeColor: "#FF5733",
      vacBans: 178713,
      xp: 123456,
    },
    reason: "PayPal donation",
    tier: "tier_2",
  },
  vanity: "steamsets",
  vanityUpdates: [],
  visibilityHistory: [
    {
      at: new Date("2026-11-22T09:34:54Z"),
      by: {
        animatedAvatar: "<value>",
        apps: 123456,
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "<value>",
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "<value>",
        badges: 123456,
        bans: 110957,
        city: {
          name: "Bad Krozingen",
        },
        country: null,
        createdAt: new Date("2023-01-01T00:00:00Z"),
        donated: 123456,
        economyBan: "steam",
        foilBadges: 123456,
        friends: 123456,
        gameBans: 843534,
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
        roles: null,
        state: {
          name: "Baden-Wurttemberg",
        },
        steamId: "76561198842603734",
        steamSetsScore: 58648,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        supporter: {
          active: true,
          months: 3,
          streak: 0,
        },
        themeColor: "#FF5733",
        vacBans: 840591,
        xp: 123456,
      },
      event: "hidden",
      reason: "osint privacy concerns",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                                | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | A URL to the JSON Schema for this object.                                                                                                     | https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json                                                                          |
| `avatar`                                                                                                                                      | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The avatar of the account                                                                                                                     | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg                                                                                                          |
| `connections`                                                                                                                                 | [components.Connection](../../models/components/connection.md)[]                                                                              | :heavy_check_mark:                                                                                                                            | The connections the account has                                                                                                               |                                                                                                                                               |
| `cosmetics`                                                                                                                                   | [components.V1AdminGetAccountCosmetics](../../models/components/v1admingetaccountcosmetics.md)                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `country`                                                                                                                                     | [components.V1AdminGetAccountCountry](../../models/components/v1admingetaccountcountry.md)                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `developerApps`                                                                                                                               | [components.DeveloperApp](../../models/components/developerapp.md)[]                                                                          | :heavy_check_mark:                                                                                                                            | The developer apps the account has                                                                                                            |                                                                                                                                               |
| `donations`                                                                                                                                   | [components.V1AdminGetAccountDonations](../../models/components/v1admingetaccountdonations.md)                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `email`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The email of the account                                                                                                                      | steamsets@example.com                                                                                                                         |
| `hidden`                                                                                                                                      | *boolean*                                                                                                                                     | :heavy_check_mark:                                                                                                                            | Whether the account has hidden itself from steamsets leaderboards                                                                             | false                                                                                                                                         |
| `hiddenAt`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | When the account last hid itself. Null when it is not hidden or hid before hides were recorded                                                | 2026-11-22T09:34:54Z                                                                                                                          |
| `hideReason`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | What the account wrote when it last hid itself. Null when it is not hidden or wrote nothing                                                   | People keep messaging me about my badges                                                                                                      |
| `location`                                                                                                                                    | [components.V1AdminGetAccountLocation](../../models/components/v1admingetaccountlocation.md)                                                  | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `locationUpdates`                                                                                                                             | [components.V1AccountLocationUpdate](../../models/components/v1accountlocationupdate.md)[]                                                    | :heavy_check_mark:                                                                                                                            | The location updates the account has                                                                                                          |                                                                                                                                               |
| `name`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The name of the account                                                                                                                       | steamsets                                                                                                                                     |
| `nameUpdates`                                                                                                                                 | [components.V1AccountNameUpdate](../../models/components/v1accountnameupdate.md)[]                                                            | :heavy_check_mark:                                                                                                                            | The name updates the account has                                                                                                              |                                                                                                                                               |
| `note`                                                                                                                                        | [components.V1AdminGetAccountNote](../../models/components/v1admingetaccountnote.md)                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `optOutFeedback`                                                                                                                              | [components.V1AdminGetAccountOptOut](../../models/components/v1admingetaccountoptout.md)                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `privacy`                                                                                                                                     | [components.V1AdminGetAccountResponseBodyPrivacy](../../models/components/v1admingetaccountresponsebodyprivacy.md)                            | :heavy_check_mark:                                                                                                                            | The privacy of the account                                                                                                                    | public                                                                                                                                        |
| `resources`                                                                                                                                   | [components.AdminAccountResource](../../models/components/adminaccountresource.md)[]                                                          | :heavy_check_mark:                                                                                                                            | Every resource, one entry each, with the value that applies and where it comes from                                                           |                                                                                                                                               |
| `restriction`                                                                                                                                 | [components.V1AdminGetAccountRestriction](../../models/components/v1admingetaccountrestriction.md)                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `roles`                                                                                                                                       | [components.Role](../../models/components/role.md)[]                                                                                          | :heavy_check_mark:                                                                                                                            | The roles the account has                                                                                                                     |                                                                                                                                               |
| `sessions`                                                                                                                                    | [components.Session](../../models/components/session.md)[]                                                                                    | :heavy_check_mark:                                                                                                                            | The sessions the account has                                                                                                                  |                                                                                                                                               |
| `tierOverride`                                                                                                                                | [components.AdminTierOverride](../../models/components/admintieroverride.md)                                                                  | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `vanity`                                                                                                                                      | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The vanity of the account                                                                                                                     | steamsets                                                                                                                                     |
| `vanityUpdates`                                                                                                                               | [components.V1AccountVanityUpdate](../../models/components/v1accountvanityupdate.md)[]                                                        | :heavy_check_mark:                                                                                                                            | The vanity updates the account has                                                                                                            |                                                                                                                                               |
| `visibilityHistory`                                                                                                                           | [components.V1AdminVisibilityEvent](../../models/components/v1adminvisibilityevent.md)[]                                                      | :heavy_minus_sign:                                                                                                                            | The account's last 50 visibility changes, newest first: the owner's hides and unhides, the opt-out in force, and staff restrictions and lifts |                                                                                                                                               |
| `visibilityUpdates`                                                                                                                           | [components.V1AccountVisibilityUpdate](../../models/components/v1accountvisibilityupdate.md)[]                                                | :heavy_check_mark:                                                                                                                            | The profile-visibility and steamsets-hidden changes the account has, newest first                                                             |                                                                                                                                               |