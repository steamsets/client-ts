# TradeBotOffers

## Example Usage

```typescript
import { TradeBotOffers } from "@steamsets/client-ts/models/components";

let value: TradeBotOffers = {
  buysGames: true,
  buysGems: true,
  buysSets: true,
  hasEventSets: false,
  sellsFoilSets: false,
  sellsGames: true,
  sellsGems: true,
  sellsSets: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `buysGames`                                      | *boolean*                                        | :heavy_check_mark:                               | Quotes a buy price for games.                    |
| `buysGems`                                       | *boolean*                                        | :heavy_check_mark:                               | Takes gems for keys.                             |
| `buysSets`                                       | *boolean*                                        | :heavy_check_mark:                               | Quotes a buy price for sets.                     |
| `hasEventSets`                                   | *boolean*                                        | :heavy_check_mark:                               | The set stock holds sets of a sale or event app. |
| `sellsFoilSets`                                  | *boolean*                                        | :heavy_check_mark:                               | Stocks foil sets and prices sets.                |
| `sellsGames`                                     | *boolean*                                        | :heavy_check_mark:                               | Stocks games.                                    |
| `sellsGems`                                      | *boolean*                                        | :heavy_check_mark:                               | Gives gems for keys.                             |
| `sellsSets`                                      | *boolean*                                        | :heavy_check_mark:                               | Stocks normal sets and prices sets.              |