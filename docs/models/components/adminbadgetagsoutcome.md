# AdminBadgeTagsOutcome

## Example Usage

```typescript
import { AdminBadgeTagsOutcome } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOutcome = {
  accepted: 123770,
  added: 599020,
  removed: 230506,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `accepted`                                    | *number*                                      | :heavy_check_mark:                            | Suggested tags the scout kept.                |
| `added`                                       | *number*                                      | :heavy_check_mark:                            | Tags the scout added that were not suggested. |
| `removed`                                     | *number*                                      | :heavy_check_mark:                            | Suggested tags the scout removed.             |