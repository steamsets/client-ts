# TradeBotSets

## Example Usage

```typescript
import { TradeBotSets } from "@steamsets/client-ts/models/components";

let value: TradeBotSets = {
  limits: {
    maxPerApp: 678747,
  },
  prices: {
    cs2: {
      buy: 3575.04,
      sell: 7944.62,
    },
    gems: {
      buy: 5137.31,
      sell: 8357.36,
    },
    hydra: {
      buy: 1399.45,
      sell: 6787.06,
    },
    tf2: {
      buy: 6956.24,
      sell: 1826.38,
    },
    tod: {
      buy: 8655.46,
      sell: 6938.24,
    },
  },
  stock: {
    apps: 192228,
    foil: 622898,
    maxLevel: 187921,
    normal: 574620,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `limits`                                                                     | [components.TradeBotSetLimits](../../models/components/tradebotsetlimits.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `prices`                                                                     | [components.TradeBotSetPrices](../../models/components/tradebotsetprices.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `stock`                                                                      | [components.TradeBotSetStock](../../models/components/tradebotsetstock.md)   | :heavy_check_mark:                                                           | N/A                                                                          |