# AccountUpdateSettingsRequest

## Example Usage

```typescript
import { AccountUpdateSettingsRequest } from "@steamsets/client-ts/models/operations";

let value: AccountUpdateSettingsRequest = {
  v1AccountUpdateSettingsRequestBody: {
    email: "steamsets@example.com",
    hidden: true,
    language: "en",
    nameEffect: "rainbow",
    themeColor: "#FF5733",
    vanity: "flo",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                                                                                    | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `xShieldShibaToken`                                                                                                                                                | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | ShieldShiba token the widget issued for exactly the new email. Required when email changes to a non-empty address. It is redeemed once and expires after 5 minutes |
| `v1AccountUpdateSettingsRequestBody`                                                                                                                               | [components.V1AccountUpdateSettingsRequestBody](../../models/components/v1accountupdatesettingsrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |