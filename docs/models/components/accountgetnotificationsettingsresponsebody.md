# AccountGetNotificationSettingsResponseBody

## Example Usage

```typescript
import { AccountGetNotificationSettingsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountGetNotificationSettingsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountGetNotificationSettingsResponseBody.json",
  discordConnected: false,
  emailVerified: true,
  hideFromTradeMatches: false,
  pushDevices: [
    {
      createdAt: new Date("2024-08-24T00:00:24.796Z"),
      endpoint: "<value>",
      userAgent: "<value>",
    },
  ],
  pushPublicKey: "<value>",
  settings: [
    {
      channel: "discord",
      enabled: false,
      kind: "trade_match_needed",
    },
  ],
  watchWishlist: true,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                               | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A URL to the JSON Schema for this object.                                                                                    | https://api.steamsets.com/schemas/AccountGetNotificationSettingsResponseBody.json                                            |
| `discordConnected`                                                                                                           | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `emailVerified`                                                                                                              | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `hideFromTradeMatches`                                                                                                       | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | Whether the account is left out of other accounts' trade matches                                                             |                                                                                                                              |
| `pushDevices`                                                                                                                | [components.AccountGetNotificationSettingsPushDevice](../../models/components/accountgetnotificationsettingspushdevice.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `pushPublicKey`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The VAPID public key for PushManager.subscribe, base64url                                                                    |                                                                                                                              |
| `settings`                                                                                                                   | [components.AccountGetNotificationSettingsEntry](../../models/components/accountgetnotificationsettingsentry.md)[]           | :heavy_check_mark:                                                                                                           | Every kind and channel the account can turn on or off, with defaults applied                                                 |                                                                                                                              |
| `watchWishlist`                                                                                                              | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |