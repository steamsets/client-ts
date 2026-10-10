# AccountListNotificationsResponseBody

## Example Usage

```typescript
import { AccountListNotificationsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountListNotificationsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountListNotificationsResponseBody.json",
  nextCursor: 376660,
  notifications: [],
  unreadCount: 556712,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dollarSchema`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL to the JSON Schema for this object.                                          | https://api.steamsets.com/schemas/AccountListNotificationsResponseBody.json        |
| `nextCursor`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | Cursor for the next page, null when this is the last page                          |                                                                                    |
| `notifications`                                                                    | [components.AccountNotification](../../models/components/accountnotification.md)[] | :heavy_check_mark:                                                                 | Newest first                                                                       |                                                                                    |
| `unreadCount`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | Unread notifications in the inbox, at most 100                                     |                                                                                    |