# BotPushRequestSetLimits

## Example Usage

```typescript
import { BotPushRequestSetLimits } from "@steamsets/client-ts/models/components";

let value: BotPushRequestSetLimits = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `maxPerUserPerApp`                                                        | *number*                                                                  | :heavy_minus_sign:                                                        | Most sets of one app the bot sells to one user. 0 means no limit.         |
| `maxStockPerApp`                                                          | *number*                                                                  | :heavy_minus_sign:                                                        | Most sets of one app the bot holds when it buys. 0 means it does not say. |