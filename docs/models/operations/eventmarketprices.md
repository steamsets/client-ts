# EventMarketPrices

## Example Usage

```typescript
import { EventMarketPrices } from "@steamsets/client-ts/models/operations";

let value: EventMarketPrices = {
  data: {
    value: {
      appId: 104369,
      averageListings: 451747,
      badgeType: "<value>",
      buyOrderAveragePrice: 772333,
      cardAveragePrice: 857675,
      setBuyOrderPrice: 821673,
      setPrice: 573523,
      updatedAt: 648110,
    },
  },
  event: "market.prices",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.LiveSubscribeMarketPrices](../../models/components/livesubscribemarketprices.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | *"market.prices"*                                                                            | :heavy_check_mark:                                                                           | The event name.                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The event ID.                                                                                |
| `retry`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The retry time in milliseconds.                                                              |