# TradeBotSetStock

## Example Usage

```typescript
import { TradeBotSetStock } from "@steamsets/client-ts/models/components";

let value: TradeBotSetStock = {
  apps: 223570,
  foil: 391837,
  maxLevel: 761665,
  normal: 823137,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `apps`                                                          | *number*                                                        | :heavy_check_mark:                                              | Distinct apps with stock.                                       |
| `foil`                                                          | *number*                                                        | :heavy_check_mark:                                              | Complete foil sets.                                             |
| `maxLevel`                                                      | *number*                                                        | :heavy_check_mark:                                              | Highest Steam level reachable from level 0 with this bot alone. |
| `normal`                                                        | *number*                                                        | :heavy_check_mark:                                              | Complete normal sets.                                           |