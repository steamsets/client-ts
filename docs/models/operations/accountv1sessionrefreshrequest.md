# AccountV1SessionRefreshRequest

## Example Usage

```typescript
import { AccountV1SessionRefreshRequest } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionRefreshRequest = {
  v1RefreshSessionRequestBody: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `userAgent`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `xForwardedFor`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `v1RefreshSessionRequestBody`                                                                    | [components.V1RefreshSessionRequestBody](../../models/components/v1refreshsessionrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |