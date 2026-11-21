# AdminBadgeTagsTaggerTags

## Example Usage

```typescript
import { AdminBadgeTagsTaggerTags } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggerTags = {
  added: 785062,
  overturned: 401602,
  removed: 659570,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `added`                                                                 | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `overturned`                                                            | *number*                                                                | :heavy_check_mark:                                                      | Tags this scout added in the window that another account later removed. |
| `removed`                                                               | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |