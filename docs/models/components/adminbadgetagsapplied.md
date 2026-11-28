# AdminBadgeTagsApplied

## Example Usage

```typescript
import { AdminBadgeTagsApplied } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsApplied = {
  applied: 739199,
  removed: 438317,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `applied`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `removed`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Applied tags someone removed later, through a review change or a staff edit. |