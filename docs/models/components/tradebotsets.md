# TradeBotSets

## Example Usage

```typescript
import { TradeBotSets } from "@steamsets/client-ts/models/components";

let value: TradeBotSets = {
  foilPrices: {
    cs2: {
      buy: 9659.08,
      sell: 5137.31,
    },
    gems: null,
    hydra: {
      buy: 1545.42,
      sell: 6956.24,
    },
    tf2: {
      buy: 424.96,
      sell: 5584.04,
    },
    tod: {
      buy: null,
      sell: 3380.87,
    },
  },
  limits: {
    maxPerApp: 670919,
    maxStockPerApp: 785098,
  },
  prices: {
    cs2: {
      buy: 9659.08,
      sell: 5137.31,
    },
    gems: {
      buy: 3165.18,
      sell: 1399.45,
    },
    hydra: {
      buy: 1545.42,
      sell: 6956.24,
    },
    tf2: {
      buy: 424.96,
      sell: 5584.04,
    },
    tod: {
      buy: null,
      sell: 3380.87,
    },
  },
  stock: {
    apps: 97310,
    foil: 502506,
    maxLevel: 325578,
    normal: 287499,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `foilPrices`                                                                 | [components.TradeBotSetPrices](../../models/components/tradebotsetprices.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `limits`                                                                     | [components.TradeBotSetLimits](../../models/components/tradebotsetlimits.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `prices`                                                                     | [components.TradeBotSetPrices](../../models/components/tradebotsetprices.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `stock`                                                                      | [components.TradeBotSetStock](../../models/components/tradebotsetstock.md)   | :heavy_check_mark:                                                           | N/A                                                                          |