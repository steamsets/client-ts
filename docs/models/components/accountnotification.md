# AccountNotification

## Example Usage

```typescript
import { AccountNotification } from "@steamsets/client-ts/models/components";

let value: AccountNotification = {
  archivedAt: new Date("2025-01-30T18:10:08.887Z"),
  createdAt: new Date("2025-05-13T16:23:20.379Z"),
  id: 674025,
  kind: "trade_match_needed",
  message: {
    action: "<value>",
    icon: "<value>",
    lines: [
      {
        text: "<value>",
        url: "https://profitable-space.net",
      },
    ],
    title: "<value>",
    url: "https://shocked-pressure.name/",
  },
  readAt: new Date("2025-03-10T14:29:11.416Z"),
  tradeMatch: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `archivedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the account archived it, null in the inbox                                                                    |
| `cardAcquired`                                                                                                     | [components.AccountNotificationCardAcquired](../../models/components/accountnotificationcardacquired.md)           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `connectionBroken`                                                                                                 | [components.AccountNotificationConnectionBroken](../../models/components/accountnotificationconnectionbroken.md)   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `kind`                                                                                                             | [components.AccountNotificationKind](../../models/components/accountnotificationkind.md)                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `message`                                                                                                          | [components.AccountNotificationMessage](../../models/components/accountnotificationmessage.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `readAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the account read it, null while unread                                                                        |
| `submissionReplied`                                                                                                | [components.AccountNotificationSubmissionReplied](../../models/components/accountnotificationsubmissionreplied.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `tradeMatch`                                                                                                       | [components.AccountNotificationTradeMatch](../../models/components/accountnotificationtradematch.md)               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |