# AdminBadgeTagsRequeueRequestBody

## Example Usage

```typescript
import { AdminBadgeTagsRequeueRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsRequeueRequestBody = {
  badgeIds: [],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `badgeIds`                           | *string*[]                           | :heavy_check_mark:                   | Badges to put back in the queue.     |
| `reason`                             | *string*                             | :heavy_minus_sign:                   | Why, for the activity log. Optional. |