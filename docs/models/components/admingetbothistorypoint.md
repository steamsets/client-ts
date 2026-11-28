# AdminGetBotHistoryPoint

## Example Usage

```typescript
import { AdminGetBotHistoryPoint } from "@steamsets/client-ts/models/components";

let value: AdminGetBotHistoryPoint = {
  at: new Date("2025-11-22T16:30:39.927Z"),
  gameStock: {
    copies: 375590,
    games: 20779,
  },
  online: true,
  prices: {
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
  },
  stock: {
    apps: 97310,
    foil: 502506,
    maxLevel: 325578,
    normal: 287499,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of the bucket. The values are the last the bot reported in it.                          |
| `gameStock`                                                                                   | [components.TradeBotGameStock](../../models/components/tradebotgamestock.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `online`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prices`                                                                                      | [components.AdminGetBotHistoryPrices](../../models/components/admingetbothistoryprices.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stock`                                                                                       | [components.TradeBotSetStock](../../models/components/tradebotsetstock.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |