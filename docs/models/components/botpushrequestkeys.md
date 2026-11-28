# BotPushRequestKeys

## Example Usage

```typescript
import { BotPushRequestKeys } from "@steamsets/client-ts/models/components";

let value: BotPushRequestKeys = {
  prices: {
    usd: {
      buy: 1.9,
      sell: 2.1,
    },
  },
  stock: {
    tf2: 10,
    tod: 0,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `prices`                                                                                 | [components.BotPushRequestKeyPrices](../../models/components/botpushrequestkeyprices.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `stock`                                                                                  | [components.BotPushRequestKeyCounts](../../models/components/botpushrequestkeycounts.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |