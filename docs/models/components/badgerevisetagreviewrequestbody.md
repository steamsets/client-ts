# BadgeReviseTagReviewRequestBody

## Example Usage

```typescript
import { BadgeReviseTagReviewRequestBody } from "@steamsets/client-ts/models/components";

let value: BadgeReviseTagReviewRequestBody = {
  badgeId: "<id>",
  expectedReviewVersion: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `badgeId`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `colors`                                                                                                            | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | Complete desired color tag IDs. An empty array removes every color.                                                 |
| `designs`                                                                                                           | [components.BadgeReviseTagReviewDesign](../../models/components/badgerevisetagreviewdesign.md)[]                    | :heavy_minus_sign:                                                                                                  | Complete desired designs, selected by ID or created by name. An empty array removes every design.                   |
| `expectedReviewVersion`                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The reviewVersion returned by the review being corrected. A stale token is rejected with 409.                       |
| `metadata`                                                                                                          | [components.BadgeReviseTagReviewDesign](../../models/components/badgerevisetagreviewdesign.md)[]                    | :heavy_minus_sign:                                                                                                  | Complete desired non-visual metadata, selected by ID or created by name. An empty array removes every metadata tag. |