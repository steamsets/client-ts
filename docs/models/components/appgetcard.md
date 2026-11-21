# AppGetCard

## Example Usage

```typescript
import { AppGetCard } from "@steamsets/client-ts/models/components";

let value: AppGetCard = {
  buyOrderCents: 719497,
  copyPricesCents: [],
  name: "<value>",
  priceCents: 748685,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `buyOrderCents`                                                                                          | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Highest buy order.                                                                                       |
| `copyPricesCents`                                                                                        | *number*[]                                                                                               | :heavy_check_mark:                                                                                       | copyPricesCents[k-1] is the total price of k copies from the cheapest listings. Empty when not read yet. |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `priceCents`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Cheapest listing.                                                                                        |