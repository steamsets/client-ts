# AccountListInventorySetsRequest

## Example Usage

```typescript
import { AccountListInventorySetsRequest } from "@steamsets/client-ts/models/operations";

let value: AccountListInventorySetsRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `cursor`                                                          | *number*                                                          | :heavy_minus_sign:                                                | App id from a previous page's nextCursor. Omit for the first page |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Sets (apps) per page                                              |