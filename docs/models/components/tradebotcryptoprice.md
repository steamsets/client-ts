# TradeBotCryptoPrice

## Example Usage

```typescript
import { TradeBotCryptoPrice } from "@steamsets/client-ts/models/components";

let value: TradeBotCryptoPrice = {
  buy: "<value>",
  coin: "btc",
  sell: "0.0000038",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `buy`              | *string*           | :heavy_check_mark: | N/A                |                    |
| `coin`             | *string*           | :heavy_check_mark: | Lowercase ticker.  | btc                |
| `sell`             | *string*           | :heavy_check_mark: | N/A                | 0.0000038          |