# BotGetHistoryPrices

## Example Usage

```typescript
import { BotGetHistoryPrices } from "@steamsets/client-ts/models/components";

let value: BotGetHistoryPrices = {
  games: {
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
  gems: {
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
  sets: {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `games`                                                                        | [components.TradeBotGamePrices](../../models/components/tradebotgameprices.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `gems`                                                                         | [components.TradeBotKeyPrices](../../models/components/tradebotkeyprices.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `sets`                                                                         | [components.TradeBotSetPrices](../../models/components/tradebotsetprices.md)   | :heavy_check_mark:                                                             | N/A                                                                            |