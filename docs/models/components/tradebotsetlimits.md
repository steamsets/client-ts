# TradeBotSetLimits

## Example Usage

```typescript
import { TradeBotSetLimits } from "@steamsets/client-ts/models/components";

let value: TradeBotSetLimits = {
  maxPerApp: 11528,
  maxStockPerApp: 12953,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `maxPerApp`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Most sets of one app sold to one user. Null for no limit.                   |
| `maxStockPerApp`                                                            | *number*                                                                    | :heavy_check_mark:                                                          | Most sets of one app the bot holds when it buys. Null when it does not say. |