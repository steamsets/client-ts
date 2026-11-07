# BotPushBody

## Example Usage

```typescript
import { BotPushBody } from "@steamsets/client-ts/models/components";

let value: BotPushBody = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `maxSetsPerApp`                                                    | *number*                                                           | :heavy_minus_sign:                                                 | Most sets of one app the bot sells to one user. 0 means no limit.  |
| `online`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the bot is accepting trades.                               |
| `rates`                                                            | [components.BotPushRates](../../models/components/botpushrates.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `stock`                                                            | [components.BotPushStock](../../models/components/botpushstock.md) | :heavy_minus_sign:                                                 | N/A                                                                |