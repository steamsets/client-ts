# AccountListNotificationsRequestBody

## Example Usage

```typescript
import { AccountListNotificationsRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountListNotificationsRequestBody = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `archived`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | List archived notifications instead of the inbox                           |
| `before`                                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Cursor: the nextCursor of the page before. Leave it out for the first page |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Notifications per page                                                     |