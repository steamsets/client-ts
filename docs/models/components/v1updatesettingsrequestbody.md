# V1UpdateSettingsRequestBody

## Example Usage

```typescript
import { V1UpdateSettingsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UpdateSettingsRequestBody = {
  color: "#7652c9",
  colors: "#7652c9",
  email: "steamsets@example.com",
  emailNotifications: [
    {
      enabled: true,
      type: "login",
    },
  ],
  hidden: true,
  language: "en",
  theme: "dark",
  vanity: "flo",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `color`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The color the account should use, only if the account is private                                           | #7652c9                                                                                                    |
| `colors`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The colors the account should use, only if the account is private                                          | #7652c9                                                                                                    |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The email the account should use, only if the account is private                                           | steamsets@example.com                                                                                      |
| `emailNotifications`                                                                                       | [components.EmailNotification](../../models/components/emailnotification.md)[]                             | :heavy_check_mark:                                                                                         | The email notifications the account wants                                                                  |                                                                                                            |
| `hidden`                                                                                                   | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Whether the account should be hidden in the leaderboards, only possible if the account is private          | true                                                                                                       |
| `language`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The language the account should use, only if the account is private                                        | en                                                                                                         |
| `role`                                                                                                     | [components.V1UpdateSettingsRequestBodyRole](../../models/components/v1updatesettingsrequestbodyrole.md)   | :heavy_minus_sign:                                                                                         | The role the account should have between one of the 6 donation roles                                       |                                                                                                            |
| `theme`                                                                                                    | [components.V1UpdateSettingsRequestBodyTheme](../../models/components/v1updatesettingsrequestbodytheme.md) | :heavy_check_mark:                                                                                         | The theme the account should use, only if the account is private                                           | dark                                                                                                       |
| `vanity`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The vanity the account should use                                                                          | flo                                                                                                        |