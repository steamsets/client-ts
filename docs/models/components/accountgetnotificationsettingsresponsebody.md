# AccountGetNotificationSettingsResponseBody

## Example Usage

```typescript
import { AccountGetNotificationSettingsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountGetNotificationSettingsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountGetNotificationSettingsResponseBody.json",
  discordConnected: false,
  emailVerified: true,
  pushDevices: [
    {
      createdAt: new Date("2025-10-30T17:03:26.496Z"),
      endpoint: "<value>",
      id: 215328,
      userAgent: "<value>",
    },
  ],
  pushPublicKey: "<value>",
  settings: [
    {
      channel: "discord",
      enabled: false,
      kind: "submission_replied",
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
| `pushDevices`                                                                                                                | [components.AccountGetNotificationSettingsPushDevice](../../models/components/accountgetnotificationsettingspushdevice.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `pushPublicKey`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The VAPID public key for PushManager.subscribe, base64url                                                                    |                                                                                                                              |
| `settings`                                                                                                                   | [components.AccountGetNotificationSettingsEntry](../../models/components/accountgetnotificationsettingsentry.md)[]           | :heavy_check_mark:                                                                                                           | Every kind and channel the account can turn on or off, with defaults applied                                                 |                                                                                                                              |
| `watchWishlist`                                                                                                              | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |