# ExchangeClassifyInventoryRequest

## Example Usage

```typescript
import { ExchangeClassifyInventoryRequest } from "@steamsets/client-ts/models/operations";

let value: ExchangeClassifyInventoryRequest = {
  accountId: 129955,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountId`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | Account to classify. This endpoint is service-only; the caller asserts the account |