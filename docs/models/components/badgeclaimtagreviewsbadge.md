# BadgeClaimTagReviewsBadge

## Example Usage

```typescript
import { BadgeClaimTagReviewsBadge } from "@steamsets/client-ts/models/components";

let value: BadgeClaimTagReviewsBadge = {
  badgeId: "<id>",
  claimedUntil: new Date("2026-05-22T22:13:51.240Z"),
  imageUrl: "https://incomplete-fisherman.name/",
  isFoil: false,
  level: 874368,
  name: "<value>",
  scarcity: 701548,
  suggestions: {
    autoAudit: false,
    autoColors: [
      {
        coverage: 6601.27,
        id: "<id>",
      },
    ],
    autoDesigns: [],
    colors: [],
    designs: [],
    proposedDesigns: [],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `badgeId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `claimedUntil`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `imageUrl`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isFoil`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `level`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `scarcity`                                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Number of tracked accounts that crafted this badge.                                                      |
| `suggestions`                                                                                            | [components.BadgeClaimTagReviewsSuggestions](../../models/components/badgeclaimtagreviewssuggestions.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |