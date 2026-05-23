# AppSearchRequest

## Example Usage

```typescript
import { AppSearchRequest } from "@steamsets/client-ts/models/operations";

let value: AppSearchRequest = {
  appSearchRequestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `userAgent`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xVisitorId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `appSearchRequestBody`                                                             | [components.AppSearchRequestBody](../../models/components/appsearchrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |