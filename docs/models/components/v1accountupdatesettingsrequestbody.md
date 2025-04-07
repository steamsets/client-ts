# V1AccountUpdateSettingsRequestBody

## Example Usage

```typescript
import { V1AccountUpdateSettingsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateSettingsRequestBody = {
  email: "steamsets@example.com",
  hidden: true,
  language: "en",
  vanity: "flo",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `email`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | The email the account should use, only if the account is private                                  | steamsets@example.com                                                                             |
| `hidden`                                                                                          | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Whether the account should be hidden in the leaderboards, only possible if the account is private | true                                                                                              |
| `language`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | The language the account should use, only if the account is private                               | en                                                                                                |
| `vanity`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The vanity the account should use                                                                 | flo                                                                                               |