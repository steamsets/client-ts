# V1GetSessionBody

## Example Usage

```typescript
import { V1GetSessionBody } from "@steamsets/client-ts/models/components";

let value: V1GetSessionBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1GetSessionBody.json",
  accountId: 123456,
  resources: [
    {
      resource: "custom_vanity",
      value: "1",
    },
  ],
  roles: [
    {
      colorr: "#ff0000",
      icon: "tier_1.svg",
      name: "Tier 1",
      role: "sapphire",
    },
  ],
  sessionData: {
    createdAt: new Date("2023-01-01T00:00:00Z"),
    expiresAt: new Date("2023-01-01T00:00:00Z"),
    ip: "127.0.0.1",
    lastSeen: new Date("2023-01-01T00:00:00Z"),
    sessionId: "123456",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  },
  steamId: "76561198842603734",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dollarSchema`                                               | *string*                                                     | :heavy_minus_sign:                                           | A URL to the JSON Schema for this object.                    | https://api.steamsets.com/schemas/V1GetSessionBody.json      |
| `accountId`                                                  | *number*                                                     | :heavy_check_mark:                                           | The account id                                               | 123456                                                       |
| `resources`                                                  | [components.Resource](../../models/components/resource.md)[] | :heavy_check_mark:                                           | The resources the user has (permissions)                     |                                                              |
| `roles`                                                      | [components.Role](../../models/components/role.md)[]         | :heavy_check_mark:                                           | The roles the user has                                       |                                                              |
| `sessionData`                                                | [components.Session](../../models/components/session.md)     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `steamId`                                                    | *string*                                                     | :heavy_check_mark:                                           | The steam id                                                 | 76561198842603734                                            |