# BotPushRequestGems

## Example Usage

```typescript
import { BotPushRequestGems } from "@steamsets/client-ts/models/components";

let value: BotPushRequestGems = {
  prices: {
    gemsPerKey: {
      tf2: {
        buy: 3600,
        sell: 3400,
      },
    },
  },
  stock: 100000,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `prices`                                                                                 | [components.BotPushRequestGemPrices](../../models/components/botpushrequestgemprices.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `stock`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | Gems the bot holds. 0 clears it.                                                         |