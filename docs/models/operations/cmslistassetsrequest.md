# CmsListAssetsRequest

## Example Usage

```typescript
import { CmsListAssetsRequest } from "@steamsets/client-ts/models/operations";

let value: CmsListAssetsRequest = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `limit`                                   | *number*                                  | :heavy_minus_sign:                        | Max rows to return (default 100, max 500) |
| `offset`                                  | *number*                                  | :heavy_minus_sign:                        | Skip this many rows (for paginated calls) |