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
      externalId: "123456",
      hide: true,
      name: "steamsets",
      provider: "discord",
      publicId: "123456",
      verified: true,
    },
  ],
  country: "Germany",
  email: "steamsets@example.com",
  locationUpdates: [
    {
      city: "Bad Krozingen",
      countryCode: "DE",
      countryName: "Germany",
      region: "Europe",
      state: "Baden-Wurttemberg",
      updatedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
  name: "steamsets",
  nameUpdates: [
    {
      name: "steamsets",
      updatedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
  privacy: "public",
  region: "Europe",
  resources: [
    {
      resource: "account_queues",
      value: "1",
    },
  ],
  roles: [
    {
      rating: 669917,
      role: "beta",
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A URL to the JSON Schema for this object.                                                                          | https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json                                               |
| `avatar`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The avatar of the account                                                                                          | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg                                                                               |
| `city`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The city of the account                                                                                            | Bad Krozingen                                                                                                      |
| `connections`                                                                                                      | [components.Connection](../../models/components/connection.md)[]                                                   | :heavy_check_mark:                                                                                                 | The connections the user has                                                                                       |                                                                                                                    |
| `country`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The country code of the account                                                                                    | Germany                                                                                                            |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the account                                                                                           | steamsets@example.com                                                                                              |
| `locationUpdates`                                                                                                  | [components.V1AccountLocationUpdate](../../models/components/v1accountlocationupdate.md)[]                         | :heavy_check_mark:                                                                                                 | The location updates the user has                                                                                  |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the account                                                                                            | steamsets                                                                                                          |
| `nameUpdates`                                                                                                      | [components.V1AccountNameUpdate](../../models/components/v1accountnameupdate.md)[]                                 | :heavy_check_mark:                                                                                                 | The name updates the user has                                                                                      |                                                                                                                    |
| `privacy`                                                                                                          | [components.V1AdminGetAccountResponseBodyPrivacy](../../models/components/v1admingetaccountresponsebodyprivacy.md) | :heavy_check_mark:                                                                                                 | The privacy of the account                                                                                         | public                                                                                                             |
| `region`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The region of the account                                                                                          | Europe                                                                                                             |
| `resources`                                                                                                        | [components.Resource](../../models/components/resource.md)[]                                                       | :heavy_check_mark:                                                                                                 | The resources the user has (permissions)                                                                           |                                                                                                                    |
| `roles`                                                                                                            | [components.Role](../../models/components/role.md)[]                                                               | :heavy_check_mark:                                                                                                 | The roles the user has                                                                                             |                                                                                                                    |
| `sessions`                                                                                                         | [components.Session](../../models/components/session.md)[]                                                         | :heavy_check_mark:                                                                                                 | The sessions the user has                                                                                          |                                                                                                                    |
| `state`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The state of the account                                                                                           | Baden-Wurttemberg                                                                                                  |
| `vanity`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The vanity of the account                                                                                          | steamsets                                                                                                          |