# AdminBadgeTagsPretagDay

## Example Usage

```typescript
import { AdminBadgeTagsPretagDay } from "@steamsets/client-ts/models/components";
import { RFCDate } from "@steamsets/client-ts/types";

let value: AdminBadgeTagsPretagDay = {
  autoTags: 637220,
  badges: 262845,
  date: new RFCDate("2025-10-20"),
  queued: 694822,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `autoTags`                                 | *number*                                   | :heavy_check_mark:                         | Tags it applied without review.            |
| `badges`                                   | *number*                                   | :heavy_check_mark:                         | Of those, badges it tagged without review. |
| `date`                                     | [RFCDate](../../types/rfcdate.md)          | :heavy_check_mark:                         | N/A                                        |
| `queued`                                   | *number*                                   | :heavy_check_mark:                         | Queue rows the pre-tagger wrote that day.  |