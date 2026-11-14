# BotPushCryptoPrice

## Example Usage

```typescript
import { BotPushCryptoPrice } from "@steamsets/client-ts/models/components";

let value: BotPushCryptoPrice = {
  coin: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `buy`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Coins the bot pays for one set, as a decimal string. "0" stops buying for this coin.                       |
| `coin`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Ticker, such as btc, eth or ltc.                                                                           |
| `sell`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Coins the bot sells one set for, as a decimal string such as "0.0000038". "0" stops selling for this coin. |