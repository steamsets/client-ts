# BotPushRequestGames

## Example Usage

```typescript
import { BotPushRequestGames } from "@steamsets/client-ts/models/components";

let value: BotPushRequestGames = {
  prices: {
    keysPerGame: {
      tf2: {
        sell: 1.5,
      },
    },
  },
  stock: {
    "730": 2,
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `priceByApp`                                                                                                                     | Record<string, [components.BotPushRequestGamePrices](../../models/components/botpushrequestgameprices.md)>                       | :heavy_minus_sign:                                                                                                               | Prices of single games, by app ID, which replace the flat price for those games. Replaces every stored override; {} clears them. |
| `prices`                                                                                                                         | [components.BotPushRequestGamePrices](../../models/components/botpushrequestgameprices.md)                                       | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `stock`                                                                                                                          | Record<string, *number*>                                                                                                         | :heavy_minus_sign:                                                                                                               | App ID to copies in stock, keys and gifts counted together. Replaces the stored game stock; {} clears it.                        |