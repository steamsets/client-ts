# AdminBadgeTagsQueueBand

## Example Usage

```typescript
import { AdminBadgeTagsQueueBand } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsQueueBand = {
  key: "1-9",
  nextUp: [],
  waiting: 509007,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | [components.Key](../../models/components/key.md)                                   | :heavy_check_mark:                                                                 | The range of tracked crafters, which is the queue priority.                        |
| `nextUp`                                                                           | [components.AdminBadgeTagsBadge](../../models/components/adminbadgetagsbadge.md)[] | :heavy_check_mark:                                                                 | The next unclaimed badges a scout gets from this band.                             |
| `waiting`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |