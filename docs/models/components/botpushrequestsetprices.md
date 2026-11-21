# BotPushRequestSetPrices

## Example Usage

```typescript
import { BotPushRequestSetPrices } from "@steamsets/client-ts/models/components";

let value: BotPushRequestSetPrices = {
  coinsPerSet: [
    {
      coin: "btc",
      sell: "0.0000038",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `coinsPerSet`                                                                            | [components.BotPushRequestCoinRate](../../models/components/botpushrequestcoinrate.md)[] | :heavy_minus_sign:                                                                       | Coins per set, one entry per coin. A coin you leave out keeps its prices.                |
| `gemsPerSet`                                                                             | [components.BotPushRequestRate](../../models/components/botpushrequestrate.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `setsPerKey`                                                                             | [components.BotPushRequestKeyRates](../../models/components/botpushrequestkeyrates.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |