# LiveSubscribeMarketPrices

## Example Usage

```typescript
import { LiveSubscribeMarketPrices } from "@steamsets/client-ts/models/components";

let value: LiveSubscribeMarketPrices = {
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `value`                                                                                    | [components.EventMarketPriceTickData](../../models/components/eventmarketpricetickdata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |