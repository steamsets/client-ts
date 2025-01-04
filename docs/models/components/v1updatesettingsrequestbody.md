# V1UpdateSettingsRequestBody

## Example Usage

```typescript
import { V1UpdateSettingsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1UpdateSettingsRequestBody = {
  email: "steamsets@example.com",
  hidden: true,
  language: "en",
  vanity: "flo",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The email the account should use, only if the account is private                                         | steamsets@example.com                                                                                    |
| `hidden`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Whether the account should be hidden in the leaderboards, only possible if the account is private        | true                                                                                                     |
| `language`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The language the account should use, only if the account is private                                      | en                                                                                                       |
| `role`                                                                                                   | [components.V1UpdateSettingsRequestBodyRole](../../models/components/v1updatesettingsrequestbodyrole.md) | :heavy_minus_sign:                                                                                       | The role the account should have between one of the 6 donation roles                                     |                                                                                                          |
| `vanity`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The vanity the account should use                                                                        | flo                                                                                                      |