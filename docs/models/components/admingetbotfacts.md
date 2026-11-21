# AdminGetBotFacts

## Example Usage

```typescript
import { AdminGetBotFacts } from "@steamsets/client-ts/models/components";

let value: AdminGetBotFacts = {
  createdAt: new Date("2025-06-20T04:40:43.596Z"),
  feeOfferId: "<id>",
  feePaidAt: new Date("2026-10-06T03:24:46.363Z"),
  ownerVerifiedAt: new Date("2026-05-01T19:25:51.846Z"),
  pushedAt: new Date("2025-05-21T09:04:44.867Z"),
  source: "scrape",
  stale: true,
  updatedAt: new Date("2025-07-16T20:01:55.070Z"),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `feeOfferId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The Steam trade offer whose key paid the fee. Empty when staff marked it paid, or it is not paid. |
| `feePaidAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | When the listing fee was marked paid. Null when it is not.                                        |
| `ownerVerifiedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | When the owner was shown to run the bot. Null for a claim nobody has checked, or no owner.        |
| `pushedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | The last push or scrape. Null when never.                                                         |
| `source`                                                                                          | [components.AdminGetBotFactsSource](../../models/components/admingetbotfactssource.md)            | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `stale`                                                                                           | *boolean*                                                                                         | :heavy_check_mark:                                                                                | The bot has not reported for over 45 minutes.                                                     |
| `updatedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |