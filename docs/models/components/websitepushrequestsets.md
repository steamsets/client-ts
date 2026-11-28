# WebsitePushRequestSets

## Example Usage

```typescript
import { WebsitePushRequestSets } from "@steamsets/client-ts/models/components";

let value: WebsitePushRequestSets = {
  levelRange: {
    max: 500,
    min: 0,
  },
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `foil`                                                                                                     | [components.BotPushRequestSetSide](../../models/components/botpushrequestsetside.md)                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `levelRange`                                                                                               | [components.WebsitePushRequestSetsLevelRange](../../models/components/websitepushrequestsetslevelrange.md) | :heavy_minus_sign:                                                                                         | The account levels the website's set stock is meant for. null clears it.                                   |
| `limits`                                                                                                   | [components.BotPushRequestSetLimits](../../models/components/botpushrequestsetlimits.md)                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `normal`                                                                                                   | [components.BotPushRequestSetSide](../../models/components/botpushrequestsetside.md)                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |