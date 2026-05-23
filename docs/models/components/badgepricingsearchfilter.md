# BadgePricingSearchFilter

## Example Usage

```typescript
import { BadgePricingSearchFilter } from "@steamsets/client-ts/models/components";

let value: BadgePricingSearchFilter = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `allCardsSelling`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `badgeType`                                                          | [components.BadgeType](../../models/components/badgetype.md)         | :heavy_minus_sign:                                                   | 'normal' \| 'foil'. Omit for both.                                   |
| `boosterAvailable`                                                   | *boolean*                                                            | :heavy_minus_sign:                                                   | booster_price IS NOT NULL when true.                                 |
| `cardCountIn`                                                        | *number*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `maxSetPrice`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `minCardCount`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `minListings`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `minSetPrice`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `nonMarketable`                                                      | [components.NonMarketable](../../models/components/nonmarketable.md) | :heavy_minus_sign:                                                   | 'show' (default) \| 'hide' \| 'only'.                                |
| `updatedSince`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | Unix ms; rows updated at >= this value.                              |