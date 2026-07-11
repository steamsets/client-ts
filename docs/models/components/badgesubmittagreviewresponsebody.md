# BadgeSubmitTagReviewResponseBody

## Example Usage

```typescript
import { BadgeSubmitTagReviewResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeSubmitTagReviewResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeSubmitTagReviewResponseBody.json",
  colors: [],
  designs: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  metadata: [],
  reviewVersion: "<value>",
  skipped: true,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A URL to the JSON Schema for this object.                                                              | https://api.steamsets.com/schemas/BadgeSubmitTagReviewResponseBody.json                                |
| `colors`                                                                                               | [components.BadgeSubmitTagReviewTag](../../models/components/badgesubmittagreviewtag.md)[]             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `designs`                                                                                              | [components.BadgeSubmitTagReviewTag](../../models/components/badgesubmittagreviewtag.md)[]             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `metadata`                                                                                             | [components.BadgeSubmitTagReviewTag](../../models/components/badgesubmittagreviewtag.md)[]             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `reviewVersion`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | Opaque optimistic-concurrency token for this review state. Pass it as expectedReviewVersion to revise. |                                                                                                        |
| `skipped`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |