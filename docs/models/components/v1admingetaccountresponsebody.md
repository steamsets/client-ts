# V1AdminGetAccountResponseBody

## Example Usage

```typescript
import { V1AdminGetAccountResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json",
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  city: "Bad Krozingen",
  connections: [],
  country: "Germany",
  customDonations: 2500,
  developerApps: [],
  donations: 1000,
  email: "steamsets@example.com",
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
  note: "<value>",
  noteAuthor: "<value>",
  noteUpdatedAt: new Date("2025-09-07T08:15:42.939Z"),
  privacy: "public",
  region: "Europe",
  resources: [
    {
      resource: "developer_apps",
      value: "1",
    },
  ],
  roles: [],
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
| `customDonations`                                                                                                  | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The staff-granted donation total in cents                                                                          | 2500                                                                                                               |
| `developerApps`                                                                                                    | [components.DeveloperApp](../../models/components/developerapp.md)[]                                               | :heavy_check_mark:                                                                                                 | The developer apps the account has                                                                                 |                                                                                                                    |
| `donations`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The Patreon-reported donation total in cents                                                                       | 1000                                                                                                               |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the account                                                                                           | steamsets@example.com                                                                                              |
| `locationUpdates`                                                                                                  | [components.V1AccountLocationUpdate](../../models/components/v1accountlocationupdate.md)[]                         | :heavy_check_mark:                                                                                                 | The location updates the account has                                                                               |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the account                                                                                            | steamsets                                                                                                          |
| `nameUpdates`                                                                                                      | [components.V1AccountNameUpdate](../../models/components/v1accountnameupdate.md)[]                                 | :heavy_check_mark:                                                                                                 | The name updates the account has                                                                                   |                                                                                                                    |
| `note`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The staff note on this account, if any                                                                             |                                                                                                                    |
| `noteAuthor`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the staff member who last wrote the note                                                                   |                                                                                                                    |
| `noteUpdatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the staff note was last written                                                                               |                                                                                                                    |
| `privacy`                                                                                                          | [components.V1AdminGetAccountResponseBodyPrivacy](../../models/components/v1admingetaccountresponsebodyprivacy.md) | :heavy_check_mark:                                                                                                 | The privacy of the account                                                                                         | public                                                                                                             |
| `region`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The region of the account                                                                                          | Europe                                                                                                             |
| `resources`                                                                                                        | [components.Resource](../../models/components/resource.md)[]                                                       | :heavy_check_mark:                                                                                                 | The resources the account has (permissions)                                                                        |                                                                                                                    |
| `roles`                                                                                                            | [components.Role](../../models/components/role.md)[]                                                               | :heavy_check_mark:                                                                                                 | The roles the account has                                                                                          |                                                                                                                    |
| `sessions`                                                                                                         | [components.Session](../../models/components/session.md)[]                                                         | :heavy_check_mark:                                                                                                 | The sessions the account has                                                                                       |                                                                                                                    |
| `state`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The state of the account                                                                                           | Baden-Wurttemberg                                                                                                  |
| `vanity`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The vanity of the account                                                                                          | steamsets                                                                                                          |
| `vanityUpdates`                                                                                                    | [components.V1AccountVanityUpdate](../../models/components/v1accountvanityupdate.md)[]                             | :heavy_check_mark:                                                                                                 | The vanity updates the account has                                                                                 |                                                                                                                    |