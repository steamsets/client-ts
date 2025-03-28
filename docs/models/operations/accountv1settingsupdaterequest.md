# AccountV1SettingsUpdateRequest

## Example Usage

```typescript
import { AccountV1SettingsUpdateRequest } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsUpdateRequest = {
  v1UpdateSettingsRequestBody: {
    email: "steamsets@example.com",
    hidden: true,
    language: "en",
    vanity: "flo",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `v1UpdateSettingsRequestBody`                                                                    | [components.V1UpdateSettingsRequestBody](../../models/components/v1updatesettingsrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |