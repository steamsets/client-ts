# TradeBotGamePrices

## Example Usage

```typescript
import { TradeBotGamePrices } from "@steamsets/client-ts/models/components";

let value: TradeBotGamePrices = {
  cs2: {
    buy: 9659.08,
    sell: 5137.31,
  },
  gems: {
    buy: 3165.18,
    sell: 1399.45,
  },
  hydra: null,
  tf2: {
    buy: 424.96,
    sell: 5584.04,
  },
  tod: {
    buy: null,
    sell: 3380.87,
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