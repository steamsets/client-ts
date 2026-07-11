# BadgeClaimTagReviewsApp

## Example Usage

```typescript
import { BadgeClaimTagReviewsApp } from "@steamsets/client-ts/models/components";

let value: BadgeClaimTagReviewsApp = {
  appId: 983459,
  appName: "<value>",
  badges: [
    {
      badgeId: "<id>",
      claimedUntil: new Date("2025-11-15T08:05:26.913Z"),
      imageUrl: "https://eminent-lava.com",
      isFoil: true,
      level: 248181,
      name: "<value>",
      scarcity: 822881,
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
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appId`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `appName`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `badges`                                                                                       | [components.BadgeClaimTagReviewsBadge](../../models/components/badgeclaimtagreviewsbadge.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |