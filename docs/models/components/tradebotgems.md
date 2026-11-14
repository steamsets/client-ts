# TradeBotGems

## Example Usage

```typescript
import { TradeBotGems } from "@steamsets/client-ts/models/components";

let value: TradeBotGems = {
  prices: {
    cs2: null,
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
  stock: 959207,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `prices`                                                                     | [components.TradeBotKeyPrices](../../models/components/tradebotkeyprices.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `stock`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Gems the bot holds. Null when it does not say.                               |