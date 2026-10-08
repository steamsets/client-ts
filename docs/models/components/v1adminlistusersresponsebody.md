# V1AdminListUsersResponseBody

## Example Usage

```typescript
import { V1AdminListUsersResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminListUsersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminListUsersResponseBody.json",
  summary: {
    active: {
      day: 40,
      month: 1100,
      week: 260,
    },
    signups: {
      day: 40,
      month: 1100,
      week: 260,
    },
    totalUsers: 52000,
  },
  total: 260,
  users: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/V1AdminListUsersResponseBody.json              |
| `summary`                                                                        | [components.V1AdminUsersSummary](../../models/components/v1adminuserssummary.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `total`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | How many accounts match the sort and window                                      | 260                                                                              |
| `users`                                                                          | [components.V1AdminUser](../../models/components/v1adminuser.md)[]               | :heavy_check_mark:                                                               | The accounts on this page, newest first by the chosen sort                       |                                                                                  |