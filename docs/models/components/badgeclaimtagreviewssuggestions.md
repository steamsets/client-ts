# BadgeClaimTagReviewsSuggestions

## Example Usage

```typescript
import { BadgeClaimTagReviewsSuggestions } from "@steamsets/client-ts/models/components";

let value: BadgeClaimTagReviewsSuggestions = {
  autoAudit: false,
  autoColors: null,
  autoDesigns: [
    {
      confidence: 5493.23,
      id: "<id>",
    },
  ],
  colors: [],
  designs: [
    {
      confidence: 2698.38,
      id: "<id>",
    },
  ],
  proposedDesigns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `autoAudit`                                                                                                          | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | This prediction was sampled for scout audit instead of being auto-confirmed.                                         |
| `autoColors`                                                                                                         | [components.BadgeClaimTagReviewsColorSuggestion](../../models/components/badgeclaimtagreviewscolorsuggestion.md)[]   | :heavy_check_mark:                                                                                                   | Already confirmed by the enabled auto-confirm color tier.                                                            |
| `autoDesigns`                                                                                                        | [components.BadgeClaimTagReviewsDesignSuggestion](../../models/components/badgeclaimtagreviewsdesignsuggestion.md)[] | :heavy_check_mark:                                                                                                   | Already confirmed by the enabled auto-confirm design tier.                                                           |
| `colors`                                                                                                             | [components.BadgeClaimTagReviewsColorSuggestion](../../models/components/badgeclaimtagreviewscolorsuggestion.md)[]   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `designs`                                                                                                            | [components.BadgeClaimTagReviewsDesignSuggestion](../../models/components/badgeclaimtagreviewsdesignsuggestion.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `proposedDesigns`                                                                                                    | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |