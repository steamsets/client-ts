# SteamShowcaseStats

## Example Usage

```typescript
import { SteamShowcaseStats } from "@steamsets/client-ts/models/components";

let value: SteamShowcaseStats = {
  dlc: 3626,
  gameCards: 823,
  items: 31020,
  marketTransactions: 12745,
  reviews: 245,
  trades: 11369,
  wishlist: 2594,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dlc`                                                              | *number*                                                           | :heavy_minus_sign:                                                 | Game Collector's DLC                                               | 3626                                                               |
| `gameCards`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Badge Collector's Game Cards: trading cards in the Steam inventory | 823                                                                |
| `items`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Item Showcase's and Items Up For Trade's Items Owned               | 31020                                                              |
| `marketTransactions`                                               | *number*                                                           | :heavy_minus_sign:                                                 | Items Up For Trade's Market Transactions                           | 12745                                                              |
| `reviews`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | Game Collector's Reviews                                           | 245                                                                |
| `trades`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Items Up For Trade's Trades Made                                   | 11369                                                              |
| `wishlist`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Game Collector's On Wishlist                                       | 2594                                                               |