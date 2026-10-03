# BadgeGetTagsVocabulary

## Example Usage

```typescript
import { BadgeGetTagsVocabulary } from "@steamsets/client-ts/models/components";

let value: BadgeGetTagsVocabulary = {
  colors: [
    {
      hex: [
        "<value 1>",
        "<value 2>",
      ],
      id: "<id>",
      name: "<value>",
    },
  ],
  designs: [],
  metadata: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `colors`                                                                                         | [components.BadgeClaimTagReviewsColor](../../models/components/badgeclaimtagreviewscolor.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `designs`                                                                                        | [components.BadgeClaimTagReviewsDesign](../../models/components/badgeclaimtagreviewsdesign.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | [components.BadgeClaimTagReviewsDesign](../../models/components/badgeclaimtagreviewsdesign.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |