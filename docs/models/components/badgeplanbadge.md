# BadgePlanBadge

## Example Usage

```typescript
import { BadgePlanBadge } from "@steamsets/client-ts/models/components";

let value: BadgePlanBadge = {
  appId: 637090,
  appImage: "<value>",
  appName: "<value>",
  badgeImage: "<value>",
  badgeType: "foil",
  cardCount: 649476,
  cards: [
    {
      cost: 485581,
      name: "<value>",
      quantity: 691940,
    },
  ],
  content: [],
  cost: 283120,
  fromLevel: 275497,
  sets: 418023,
  toLevel: 561573,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `appId`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `appImage`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | The app's capsule image.                                                                          |
| `appName`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `badgeImage`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The badge's art at toLevel. Empty when unknown.                                                   |
| `badgeType`                                                                                       | [components.BadgeType](../../models/components/badgetype.md)                                      | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `cardCount`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | Cards in one set.                                                                                 |
| `cards`                                                                                           | [components.BadgePlanCard](../../models/components/badgeplancard.md)[]                            | :heavy_check_mark:                                                                                | The cards to buy, cards you hold already counted. Empty when you hold every card the crafts take. |
| `content`                                                                                         | [components.Content](../../models/components/content.md)[]                                        | :heavy_check_mark:                                                                                | The app's content flags. Empty for none.                                                          |
| `cost`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | What this badge's cards cost, in US cents.                                                        |
| `fromLevel`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | The badge's level now (0 for none).                                                               |
| `sets`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | Sets to craft: toLevel minus fromLevel.                                                           |
| `toLevel`                                                                                         | *number*                                                                                          | :heavy_check_mark:                                                                                | The badge's level after the plan.                                                                 |