# TradeBotCrypto

## Example Usage

```typescript
import { TradeBotCrypto } from "@steamsets/client-ts/models/components";

let value: TradeBotCrypto = {
  foilPrices: [
    {
      buy: "<value>",
      coin: "btc",
      sell: "0.0000038",
    },
  ],
  prices: [
    {
      buy: "<value>",
      coin: "btc",
      sell: "0.0000038",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `foilPrices`                                                                       | [components.TradeBotCryptoPrice](../../models/components/tradebotcryptoprice.md)[] | :heavy_check_mark:                                                                 | Foil set prices, by coin, in ticker order. Empty when the bot quotes none.         |
| `prices`                                                                           | [components.TradeBotCryptoPrice](../../models/components/tradebotcryptoprice.md)[] | :heavy_check_mark:                                                                 | Normal set prices, by coin, in ticker order.                                       |