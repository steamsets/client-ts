# FindOwnersRequestBody

## Example Usage

```typescript
import { FindOwnersRequestBody } from "@steamsets/client-ts/models/components";

let value: FindOwnersRequestBody = {
  itemIds: [
    590250,
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `itemIds`                                         | *number*[]                                        | :heavy_check_mark:                                | Trading item class IDs to look up                 |
| `maxDepth`                                        | *number*                                          | :heavy_minus_sign:                                | Friend-path depth limit (default 4, max 6)        |
| `ownersPerItem`                                   | *number*                                          | :heavy_minus_sign:                                | Max owners returned per item (default 10, max 25) |