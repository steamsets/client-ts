# AccountNotification

## Example Usage

```typescript
import { AccountNotification } from "@steamsets/client-ts/models/components";

let value: AccountNotification = {
  archivedAt: new Date("2025-01-30T18:10:08.887Z"),
  createdAt: new Date("2025-05-13T16:23:20.379Z"),
  id: 674025,
  kind: "connection_broken",
  readAt: new Date("2026-05-19T00:13:57.338Z"),
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `archivedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the account archived it, null in the inbox                                                                  |
| `cardAcquired`                                                                                                   | [components.AccountNotificationCardAcquired](../../models/components/accountnotificationcardacquired.md)         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `connectionBroken`                                                                                               | [components.AccountNotificationConnectionBroken](../../models/components/accountnotificationconnectionbroken.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `kind`                                                                                                           | [components.AccountNotificationKind](../../models/components/accountnotificationkind.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `readAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the account read it, null while unread                                                                      |