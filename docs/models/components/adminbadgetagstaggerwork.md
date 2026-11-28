# AdminBadgeTagsTaggerWork

## Example Usage

```typescript
import { AdminBadgeTagsTaggerWork } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggerWork = {
  edits: 107263,
  reviews: 397573,
  revisions: 492282,
  skips: 855188,
  source: "log",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `edits`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | Tag edits outside the queue.                                                                           |
| `reviews`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `revisions`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | Changes to the scout's own finished reviews.                                                           |
| `skips`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `source`                                                                                               | [components.AdminBadgeTagsTaggerWorkSource](../../models/components/adminbadgetagstaggerworksource.md) | :heavy_check_mark:                                                                                     | approximate when part of the reviews and skips predate the review log and were counted from the queue. |