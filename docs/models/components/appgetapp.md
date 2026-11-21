# AppGetApp

## Example Usage

```typescript
import { AppGetApp } from "@steamsets/client-ts/models/components";

let value: AppGetApp = {
  appId: 660614,
  foil: {
    cardCount: 715517,
    cards: [
      {
        buyOrderCents: 328616,
        copyPricesCents: [
          221627,
          526282,
        ],
        name: "<value>",
        priceCents: 312713,
      },
    ],
    levels: [
      {
        badgeId: "bdg_123",
        highestLevel: 416191,
        image: "https://picsum.photos/seed/ISVLgVlbO/3340/1347",
        level: 875172,
        name: "<value>",
        scarcity: 501115,
        steamBadgeId: 436028,
        trackedHolders: 102000,
        xp: 478355,
      },
    ],
  },
  image: "https://picsum.photos/seed/dnwZ4/1257/1192",
  isEvent: false,
  isSale: false,
  name: "<value>",
  normal: {
    cardCount: 751671,
    cards: [
      {
        buyOrderCents: 328616,
        copyPricesCents: [
          221627,
          526282,
        ],
        name: "<value>",
        priceCents: 312713,
      },
    ],
    levels: [],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `appId`                                                          | *number*                                                         | :heavy_check_mark:                                               | Steam app id.                                                    |
| `foil`                                                           | [components.AppGetBadge](../../models/components/appgetbadge.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `image`                                                          | *string*                                                         | :heavy_check_mark:                                               | The app's capsule image.                                         |
| `isEvent`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | A Steam event's badge rather than a game's.                      |
| `isSale`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | A Steam sale's badge rather than a game's.                       |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `normal`                                                         | [components.AppGetBadge](../../models/components/appgetbadge.md) | :heavy_minus_sign:                                               | N/A                                                              |