# BotGetHistoryPoint

## Example Usage

```typescript
import { BotGetHistoryPoint } from "@steamsets/client-ts/models/components";

let value: BotGetHistoryPoint = {
  at: new Date("2026-08-05T17:55:50.369Z"),
  gameStock: {
    copies: 680479,
    games: 8070,
  },
  online: true,
  prices: {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of the bucket. The values are the last the bot reported in it.                          |
| `gameStock`                                                                                   | [components.TradeBotGameStock](../../models/components/tradebotgamestock.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `online`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prices`                                                                                      | [components.BotGetHistoryPrices](../../models/components/botgethistoryprices.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stock`                                                                                       | [components.TradeBotSetStock](../../models/components/tradebotsetstock.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |