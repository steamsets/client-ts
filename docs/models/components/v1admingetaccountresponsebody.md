# V1AdminGetAccountResponseBody

## Example Usage

```typescript
import { V1AdminGetAccountResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json",
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  city: "Bad Krozingen",
  connections: [
    {
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
      connectionId: "123456",
      externalId: "123456",
      failed: true,
      hide: true,
      name: "steamsets",
      provider: "discord",
      verified: true,
    },
  ],
  country: "Germany",
  developerApps: [
    {
      apiKey: "api_123",
      description: "My App Description",
      environment: "production",
      id: "da_123456",
      name: "My App",
    },
  ],
  email: "steamsets@example.com",
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
  privacy: "public",
  region: "Europe",
  resources: [
    {
      resource: "max_leaderboard_entries",
      value: "1",
    },
  ],
  roles: [
    {
      rating: 510017,
      role: "sapphire",
    },
  ],
  sessions: [
    {
      createdAt: new Date("2023-01-01T00:00:00Z"),
      expiresAt: new Date("2023-01-01T00:00:00Z"),
      ip: "127.0.0.1",
      lastSeen: new Date("2023-01-01T00:00:00Z"),
      sessionId: "123456",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  ],
  state: "Baden-Wurttemberg",
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A URL to the JSON Schema for this object.                                                                          | https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json                                               |
| `avatar`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The avatar of the account                                                                                          | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg                                                                               |
| `city`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The city of the account                                                                                            | Bad Krozingen                                                                                                      |
| `connections`                                                                                                      | [components.Connection](../../models/components/connection.md)[]                                                   | :heavy_check_mark:                                                                                                 | The connections the account has                                                                                    |                                                                                                                    |
| `country`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The country code of the account                                                                                    | Germany                                                                                                            |
| `developerApps`                                                                                                    | [components.DeveloperApp](../../models/components/developerapp.md)[]                                               | :heavy_check_mark:                                                                                                 | The developer apps the account has                                                                                 |                                                                                                                    |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the account                                                                                           | steamsets@example.com                                                                                              |
| `locationUpdates`                                                                                                  | [components.V1AccountLocationUpdate](../../models/components/v1accountlocationupdate.md)[]                         | :heavy_check_mark:                                                                                                 | The location updates the account has                                                                               |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the account                                                                                            | steamsets                                                                                                          |
| `nameUpdates`                                                                                                      | [components.V1AccountNameUpdate](../../models/components/v1accountnameupdate.md)[]                                 | :heavy_check_mark:                                                                                                 | The name updates the account has                                                                                   |                                                                                                                    |
| `privacy`                                                                                                          | [components.V1AdminGetAccountResponseBodyPrivacy](../../models/components/v1admingetaccountresponsebodyprivacy.md) | :heavy_check_mark:                                                                                                 | The privacy of the account                                                                                         | public                                                                                                             |
| `region`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The region of the account                                                                                          | Europe                                                                                                             |
| `resources`                                                                                                        | [components.Resource](../../models/components/resource.md)[]                                                       | :heavy_check_mark:                                                                                                 | The resources the account has (permissions)                                                                        |                                                                                                                    |
| `roles`                                                                                                            | [components.Role](../../models/components/role.md)[]                                                               | :heavy_check_mark:                                                                                                 | The roles the account has                                                                                          |                                                                                                                    |
| `sessions`                                                                                                         | [components.Session](../../models/components/session.md)[]                                                         | :heavy_check_mark:                                                                                                 | The sessions the account has                                                                                       |                                                                                                                    |
| `state`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The state of the account                                                                                           | Baden-Wurttemberg                                                                                                  |
| `vanity`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The vanity of the account                                                                                          | steamsets                                                                                                          |
| `vanityUpdates`                                                                                                    | [components.V1AccountVanityUpdate](../../models/components/v1accountvanityupdate.md)[]                             | :heavy_check_mark:                                                                                                 | The vanity updates the account has                                                                                 |                                                                                                                    |