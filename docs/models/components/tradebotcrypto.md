# TradeBotCrypto

## Example Usage

```typescript
import { TradeBotCrypto } from "@steamsets/client-ts/models/components";

let value: TradeBotCrypto = {
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
| `prices`                                                                           | [components.TradeBotCryptoPrice](../../models/components/tradebotcryptoprice.md)[] | :heavy_check_mark:                                                                 | By coin, in ticker order.                                                          |