# PostV1AccountRefreshSessionRequest

## Example Usage

```typescript
import { PostV1AccountRefreshSessionRequest } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountRefreshSessionRequest = {
  v1AccountRefreshSessionRequestBody: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `userAgent`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `xForwardedFor`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `v1AccountRefreshSessionRequestBody`                                                                           | [components.V1AccountRefreshSessionRequestBody](../../models/components/v1accountrefreshsessionrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |