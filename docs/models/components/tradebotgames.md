# TradeBotGames

## Example Usage

```typescript
import { TradeBotGames } from "@steamsets/client-ts/models/components";

let value: TradeBotGames = {
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
    tod: null,
  },
  stock: {
    copies: 533897,
    games: 558404,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `prices`                                                                       | [components.TradeBotGamePrices](../../models/components/tradebotgameprices.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `stock`                                                                        | [components.TradeBotGameStock](../../models/components/tradebotgamestock.md)   | :heavy_check_mark:                                                             | N/A                                                                            |