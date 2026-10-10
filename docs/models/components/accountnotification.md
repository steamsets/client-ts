# AccountNotification

## Example Usage

```typescript
import { AccountNotification } from "@steamsets/client-ts/models/components";

let value: AccountNotification = {
  createdAt: new Date("2026-11-28T22:56:02.934Z"),
  id: 361092,
  kind: "card_acquired",
  readAt: new Date("2026-03-09T22:22:17.892Z"),
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cardAcquired`                                                                                                   | [components.AccountNotificationCardAcquired](../../models/components/accountnotificationcardacquired.md)         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `connectionBroken`                                                                                               | [components.AccountNotificationConnectionBroken](../../models/components/accountnotificationconnectionbroken.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `kind`                                                                                                           | [components.AccountNotificationKind](../../models/components/accountnotificationkind.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `readAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the account read it, null while unread                                                                      |