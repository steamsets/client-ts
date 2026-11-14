# TradeBotSetPrices

## Example Usage

```typescript
import { TradeBotSetPrices } from "@steamsets/client-ts/models/components";

let value: TradeBotSetPrices = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cs2`                                                              | [components.TradeBotRate](../../models/components/tradebotrate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `gems`                                                             | [components.TradeBotRate](../../models/components/tradebotrate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `hydra`                                                            | [components.TradeBotRate](../../models/components/tradebotrate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `tf2`                                                              | [components.TradeBotRate](../../models/components/tradebotrate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `tod`                                                              | [components.TradeBotRate](../../models/components/tradebotrate.md) | :heavy_check_mark:                                                 | N/A                                                                |