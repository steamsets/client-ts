# AdminGetBotProfile

## Example Usage

```typescript
import { AdminGetBotProfile } from "@steamsets/client-ts/models/components";

let value: AdminGetBotProfile = {
  commands: [],
  limits: {
    maxSetsPerApp: 796999,
    maxStockPerApp: 719794,
  },
  payment: [],
  websiteUrl: "https://courteous-premier.info/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commands`                                                                       | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `limits`                                                                         | [components.AdminGetBotLimits](../../models/components/admingetbotlimits.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `payment`                                                                        | [components.AdminGetBotPayment](../../models/components/admingetbotpayment.md)[] | :heavy_check_mark:                                                               | Only the currencies the bot lists items for.                                     |
| `websiteUrl`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | The website as the bot pushed it, without the brand's fallback. Empty for none.  |