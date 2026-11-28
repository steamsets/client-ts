# AdminBadgeTagsTaggerPace

## Example Usage

```typescript
import { AdminBadgeTagsTaggerPace } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggerPace = {
  ms: 599445,
  source: "approximate",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `ms`                                                                                                                          | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `source`                                                                                                                      | [components.AdminBadgeTagsTaggerPaceSource](../../models/components/adminbadgetagstaggerpacesource.md)                        | :heavy_check_mark:                                                                                                            | log: from claim to review, from the review log. approximate: the gap between two reviews in one sitting, from before the log. |