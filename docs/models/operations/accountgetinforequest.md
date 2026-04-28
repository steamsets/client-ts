# AccountGetInfoRequest

## Example Usage

```typescript
import { AccountGetInfoRequest } from "@steamsets/client-ts/models/operations";

let value: AccountGetInfoRequest = {
  accountSearch: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `xForwardedFor`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `userAgent`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `xVisitorId`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `accountSearch`                                                      | [components.AccountSearch](../../models/components/accountsearch.md) | :heavy_check_mark:                                                   | N/A                                                                  |