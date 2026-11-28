# BotPushRequestSets

## Example Usage

```typescript
import { BotPushRequestSets } from "@steamsets/client-ts/models/components";

let value: BotPushRequestSets = {
  limits: {
    maxPerUserPerApp: 5,
  },
  normal: {
    prices: {
      setsPerKey: {
        tf2: {
          buy: 14,
          sell: 12,
        },
      },
    },
    stock: {
      "440": 3,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `foil`                                                                                   | [components.BotPushRequestSetSide](../../models/components/botpushrequestsetside.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `limits`                                                                                 | [components.BotPushRequestSetLimits](../../models/components/botpushrequestsetlimits.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `normal`                                                                                 | [components.BotPushRequestSetSide](../../models/components/botpushrequestsetside.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |