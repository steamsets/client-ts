# BadgeReviseTagReviewResponseBody

## Example Usage

```typescript
import { BadgeReviseTagReviewResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeReviseTagReviewResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeReviseTagReviewResponseBody.json",
  colors: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  designs: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  metadata: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  reviewVersion: "<value>",
  skipped: false,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | A URL to the JSON Schema for this object.                                                               | https://api.steamsets.com/schemas/BadgeReviseTagReviewResponseBody.json                                 |
| `colors`                                                                                                | [components.BadgeReviseTagReviewTag](../../models/components/badgerevisetagreviewtag.md)[]              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `designs`                                                                                               | [components.BadgeReviseTagReviewTag](../../models/components/badgerevisetagreviewtag.md)[]              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `metadata`                                                                                              | [components.BadgeReviseTagReviewTag](../../models/components/badgerevisetagreviewtag.md)[]              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `reviewVersion`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | Opaque optimistic-concurrency token for the corrected review state. Pass it to make another correction. |                                                                                                         |
| `skipped`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |