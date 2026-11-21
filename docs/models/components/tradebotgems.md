# TradeBotGems

## Example Usage

```typescript
import { TradeBotGems } from "@steamsets/client-ts/models/components";

let value: TradeBotGems = {
  prices: {
    cs2: {
      buy: 9659.08,
      sell: 5137.31,
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
  stock: 959207,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prices`                                                                     | [components.TradeBotKeyPrices](../../models/components/tradebotkeyprices.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `stock`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Gems the bot holds. Null when it does not say.                               |