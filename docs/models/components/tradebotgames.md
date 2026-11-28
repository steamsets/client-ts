# TradeBotGames

## Example Usage

```typescript
import { TradeBotGames } from "@steamsets/client-ts/models/components";

let value: TradeBotGames = {
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
    copies: 877656,
    games: 376171,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `prices`                                                                       | [components.TradeBotGamePrices](../../models/components/tradebotgameprices.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `stock`                                                                        | [components.TradeBotGameStock](../../models/components/tradebotgamestock.md)   | :heavy_check_mark:                                                             | N/A                                                                            |