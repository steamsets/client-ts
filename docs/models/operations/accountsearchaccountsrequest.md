# AccountSearchAccountsRequest

## Example Usage

```typescript
import { AccountSearchAccountsRequest } from "@steamsets/client-ts/models/operations";

let value: AccountSearchAccountsRequest = {
  accountSearchAccountsRequestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userAgent`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `xVisitorId`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `accountSearchAccountsRequestBody`                                                                         | [components.AccountSearchAccountsRequestBody](../../models/components/accountsearchaccountsrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |