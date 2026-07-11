# BadgeClaimTagReviewsResponseBody

## Example Usage

```typescript
import { BadgeClaimTagReviewsResponseBody } from "@steamsets/client-ts/models/components";

let value: BadgeClaimTagReviewsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BadgeClaimTagReviewsResponseBody.json",
  apps: [
    {
      appId: 501068,
      appName: "<value>",
      badges: null,
    },
  ],
  colors: [],
  designs: null,
  metadata: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/BadgeClaimTagReviewsResponseBody.json                          |
| `apps`                                                                                           | [components.BadgeClaimTagReviewsApp](../../models/components/badgeclaimtagreviewsapp.md)[]       | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `colors`                                                                                         | [components.BadgeClaimTagReviewsColor](../../models/components/badgeclaimtagreviewscolor.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `designs`                                                                                        | [components.BadgeClaimTagReviewsDesign](../../models/components/badgeclaimtagreviewsdesign.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `metadata`                                                                                       | [components.BadgeClaimTagReviewsDesign](../../models/components/badgeclaimtagreviewsdesign.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |