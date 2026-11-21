# BotGetHistoryPrices

## Example Usage

```typescript
import { BotGetHistoryPrices } from "@steamsets/client-ts/models/components";

let value: BotGetHistoryPrices = {
  games: {
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
  gems: {
    cs2: {
      buy: 9659.08,
      sell: 5137.31,
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
  },
  sets: {
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
    tf2: null,
    tod: {
      buy: null,
      sell: 3380.87,
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