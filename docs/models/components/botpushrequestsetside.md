# BotPushRequestSetSide

## Example Usage

```typescript
import { BotPushRequestSetSide } from "@steamsets/client-ts/models/components";

let value: BotPushRequestSetSide = {
  prices: {
    coinsPerSet: [
      {
        coin: "btc",
        sell: "0.0000038",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `prices`                                                                                                      | [components.BotPushRequestSetPrices](../../models/components/botpushrequestsetprices.md)                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `stock`                                                                                                       | Record<string, *number*>                                                                                      | :heavy_minus_sign:                                                                                            | App ID to complete sets. Replaces the stored stock of this side: an app you leave out has none. {} clears it. |