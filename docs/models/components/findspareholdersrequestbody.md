# FindSpareHoldersRequestBody

## Example Usage

```typescript
import { FindSpareHoldersRequestBody } from "@steamsets/client-ts/models/components";

let value: FindSpareHoldersRequestBody = {
  itemIds: [
    102911,
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `holdersPerItem`                                   | *number*                                           | :heavy_minus_sign:                                 | Max holders returned per item (default 10, max 25) |
| `itemIds`                                          | *number*[]                                         | :heavy_check_mark:                                 | Trading card class IDs to look up                  |
| `maxDepth`                                         | *number*                                           | :heavy_minus_sign:                                 | Friend-path depth limit (default 4, max 6)         |