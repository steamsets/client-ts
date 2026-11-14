# TradeBotGameStock

## Example Usage

```typescript
import { TradeBotGameStock } from "@steamsets/client-ts/models/components";

let value: TradeBotGameStock = {
  copies: 74273,
  games: 600251,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `copies`                                                   | *number*                                                   | :heavy_check_mark:                                         | Copies in stock across all games, keys and gifts together. |
| `games`                                                    | *number*                                                   | :heavy_check_mark:                                         | Distinct games in stock.                                   |