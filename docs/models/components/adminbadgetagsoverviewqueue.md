# AdminBadgeTagsOverviewQueue

## Example Usage

```typescript
import { AdminBadgeTagsOverviewQueue } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOverviewQueue = {
  auto: 597153,
  expired: 915668,
  expiredScouts: 842038,
  held: 167336,
  heldScouts: 510325,
  notQueued: 266397,
  oldestPending: null,
  pending: 871354,
  reviewed: 740853,
  skipped: 283728,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `auto`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Badges tagged by the auto-confirm tier without a review.                                      |
| `expired`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Pending badges whose claim ran out without a review.                                          |
| `expiredScouts`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `held`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Pending badges a scout holds a live claim on.                                                 |
| `heldScouts`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notQueued`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Badges the adminBadgeTagsTagger has not reached yet.                                          |
| `oldestPending`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the longest waiting badge entered the queue. Null when nothing waits.                    |
| `pending`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Badges waiting for a scout.                                                                   |
| `reviewed`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `skipped`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |