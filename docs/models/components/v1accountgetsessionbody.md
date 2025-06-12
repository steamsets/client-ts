# V1AccountGetSessionBody

## Example Usage

```typescript
import { V1AccountGetSessionBody } from "@steamsets/client-ts/models/components";

let value: V1AccountGetSessionBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountGetSessionBody.json",
  accountId: 123456,
  avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  email: "flo@example.com",
  isNew: true,
  level: 10000,
  name: "flo",
  resources: [],
  roles: [],
  sessionData: {
    createdAt: new Date("2023-01-01T00:00:00Z"),
    expiresAt: new Date("2023-01-01T00:00:00Z"),
    ip: "127.0.0.1",
    lastSeen: new Date("2023-01-01T00:00:00Z"),
    level: 1,
    sessionId: "123456",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
  steamId: "76561198842603734",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `dollarSchema`                                                 | *string*                                                       | :heavy_minus_sign:                                             | A URL to the JSON Schema for this object.                      | https://api.steamsets.com/schemas/V1AccountGetSessionBody.json |
| `accountId`                                                    | *number*                                                       | :heavy_check_mark:                                             | The account id                                                 | 123456                                                         |
| `avatar`                                                       | *string*                                                       | :heavy_check_mark:                                             | The avatar of the account                                      | f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg                           |
| `email`                                                        | *string*                                                       | :heavy_minus_sign:                                             | The email of the account                                       | flo@example.com                                                |
| `isNew`                                                        | *boolean*                                                      | :heavy_check_mark:                                             | Whether the account is new                                     | true                                                           |
| `level`                                                        | *number*                                                       | :heavy_check_mark:                                             | The XP of the account                                          | 10000                                                          |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the account                                        | flo                                                            |
| `resources`                                                    | [components.Resource](../../models/components/resource.md)[]   | :heavy_check_mark:                                             | The resources the account has (permissions)                    |                                                                |
| `roles`                                                        | [components.Role](../../models/components/role.md)[]           | :heavy_check_mark:                                             | The roles the account has                                      |                                                                |
| `sessionData`                                                  | [components.Session](../../models/components/session.md)       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `steamId`                                                      | *string*                                                       | :heavy_check_mark:                                             | The steam id                                                   | 76561198842603734                                              |