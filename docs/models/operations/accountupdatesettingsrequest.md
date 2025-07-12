# AccountUpdateSettingsRequest

## Example Usage

```typescript
import { AccountUpdateSettingsRequest } from "@steamsets/client-ts/models/operations";

let value: AccountUpdateSettingsRequest = {
  v1AccountUpdateSettingsRequestBody: {
    email: "steamsets@example.com",
    hidden: true,
    language: "en",
    vanity: "flo",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `v1AccountUpdateSettingsRequestBody`                                                                           | [components.V1AccountUpdateSettingsRequestBody](../../models/components/v1accountupdatesettingsrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |