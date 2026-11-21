# AppGetPrices

## Example Usage

```typescript
import { AppGetPrices } from "@steamsets/client-ts/models/components";

let value: AppGetPrices = {
  cardAverageCents: 310807,
  cardBuyOrderAverageCents: 696162,
  fullBadgeCents: 72902,
  setBuyOrderCents: 638618,
  setCents: 852223,
  toLevelCents: [
    190638,
    721441,
    666636,
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cardAverageCents`                                                                                                             | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `cardBuyOrderAverageCents`                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fullBadgeCents`                                                                                                               | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | Every level of the badge from the cheapest listings, 0 when some card cannot be bought that many times.                        |
| `setBuyOrderCents`                                                                                                             | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | One of each card at the highest buy orders.                                                                                    |
| `setCents`                                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | One of each card from the cheapest listings.                                                                                   |
| `toLevelCents`                                                                                                                 | *number*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | toLevelCents[n-1] is the price of the first n levels, for n from 1 to 4. A foil badge has one level, so all four are the same. |