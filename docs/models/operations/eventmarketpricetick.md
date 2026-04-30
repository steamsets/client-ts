# EventMarketPriceTick

## Example Usage

```typescript
import { EventMarketPriceTick } from "@steamsets/client-ts/models/operations";

let value: EventMarketPriceTick = {
  data: {
    appId: 740400,
    averageListings: 787684,
    badgeType: "<value>",
    buyOrderAveragePrice: 530592,
    cardAveragePrice: 804509,
    setBuyOrderPrice: 706585,
    setPrice: 270552,
    updatedAt: 433386,
  },
  event: "market-price-tick",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.EventMarketPriceTickData](../../models/components/eventmarketpricetickdata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `event`                                                                                    | *"market-price-tick"*                                                                      | :heavy_check_mark:                                                                         | The event name.                                                                            |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The event ID.                                                                              |
| `retry`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The retry time in milliseconds.                                                            |