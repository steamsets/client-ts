# BadgeGetTagsResponseBody

## Example Usage

```typescript
import { BadgeGetTagsResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeGetTagsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeGetTagsResponseBody.json",
  badgeId: "<id>",
  colors: [],
  designs: [],
  metadata: [],
  tagsVersion: "<value>",
  vocabulary: {
    colors: [],
    designs: [],
    metadata: [],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | A URL to the JSON Schema for this object.                                                                 | https://api.steamsets.com/schemas/BadgeGetTagsResponseBody.json                                           |
| `badgeId`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `colors`                                                                                                  | [components.BadgeGetTagsTag](../../models/components/badgegettagstag.md)[]                                | :heavy_check_mark:                                                                                        | Confirmed color tags.                                                                                     |                                                                                                           |
| `designs`                                                                                                 | [components.BadgeGetTagsTag](../../models/components/badgegettagstag.md)[]                                | :heavy_check_mark:                                                                                        | Confirmed visual design tags.                                                                             |                                                                                                           |
| `metadata`                                                                                                | [components.BadgeGetTagsTag](../../models/components/badgegettagstag.md)[]                                | :heavy_check_mark:                                                                                        | Confirmed non-visual metadata tags.                                                                       |                                                                                                           |
| `reviewStatus`                                                                                            | [components.ReviewStatus](../../models/components/reviewstatus.md)                                        | :heavy_minus_sign:                                                                                        | Status of the badge's tag review queue row. Absent when the badge has no queue row.                       |                                                                                                           |
| `suggestions`                                                                                             | [components.BadgeClaimTagReviewsSuggestions](../../models/components/badgeclaimtagreviewssuggestions.md)  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `tagsVersion`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Opaque optimistic-concurrency token for the confirmed tag set. Pass it as expectedTagsVersion to setTags. |                                                                                                           |
| `vocabulary`                                                                                              | [components.BadgeGetTagsVocabulary](../../models/components/badgegettagsvocabulary.md)                    | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |