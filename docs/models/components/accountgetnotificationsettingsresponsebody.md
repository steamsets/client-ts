# AccountGetNotificationSettingsResponseBody

## Example Usage

```typescript
import { AccountGetNotificationSettingsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountGetNotificationSettingsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountGetNotificationSettingsResponseBody.json",
  discordConnected: false,
  settings: [],
  watchWishlist: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A URL to the JSON Schema for this object.                                                                          | https://api.steamsets.com/schemas/AccountGetNotificationSettingsResponseBody.json                                  |
| `discordConnected`                                                                                                 | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `settings`                                                                                                         | [components.AccountGetNotificationSettingsEntry](../../models/components/accountgetnotificationsettingsentry.md)[] | :heavy_check_mark:                                                                                                 | Every kind and channel the account can turn on or off, with defaults applied                                       |                                                                                                                    |
| `watchWishlist`                                                                                                    | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |