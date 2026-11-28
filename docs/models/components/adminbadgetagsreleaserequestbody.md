# AdminBadgeTagsReleaseRequestBody

## Example Usage

```typescript
import { AdminBadgeTagsReleaseRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsReleaseRequestBody = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                           | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The scout whose claims to clear. Empty clears every expired claim, and then expiredOnly must be true. |
| `expiredOnly`                                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Only claims that ran out without a review.                                                            |
| `reason`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Why, for the activity log. Optional.                                                                  |