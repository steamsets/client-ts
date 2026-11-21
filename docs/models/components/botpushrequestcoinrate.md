# BotPushRequestCoinRate

## Example Usage

```typescript
import { BotPushRequestCoinRate } from "@steamsets/client-ts/models/components";

let value: BotPushRequestCoinRate = {
  coin: "btc",
  sell: "0.0000038",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `buy`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | Coins the bot pays for one set, as a decimal string. "0" stops buying for this coin.  |                                                                                       |
| `coin`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Ticker, such as btc, eth or ltc.                                                      | btc                                                                                   |
| `sell`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | Coins the bot asks for one set, as a decimal string. "0" stops selling for this coin. | 0.0000038                                                                             |