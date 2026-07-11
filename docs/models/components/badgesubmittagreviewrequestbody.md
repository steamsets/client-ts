# BadgeSubmitTagReviewRequestBody

## Example Usage

```typescript
import { BadgeSubmitTagReviewRequestBody } from "@steamsets/client-ts/models/components";

let value: BadgeSubmitTagReviewRequestBody = {
  badgeId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `badgeId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `colors`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | Final color tag IDs.                                                                             |
| `designs`                                                                                        | [components.BadgeSubmitTagReviewDesign](../../models/components/badgesubmittagreviewdesign.md)[] | :heavy_minus_sign:                                                                               | Final designs, selected by ID or created by name.                                                |
| `metadata`                                                                                       | [components.BadgeSubmitTagReviewDesign](../../models/components/badgesubmittagreviewdesign.md)[] | :heavy_minus_sign:                                                                               | Final non-visual metadata, selected by ID or created by name.                                    |
| `skip`                                                                                           | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `skipReason`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |