# TradeBotRate

## Example Usage

```typescript
import { TradeBotRate } from "@steamsets/client-ts/models/components";

let value: TradeBotRate = {
  buy: 5710.54,
  sell: 1518.21,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `buy`                                                                      | *number*                                                                   | :heavy_check_mark:                                                         | What the bot buys at. Null when it does not buy or the price is unknown.   |
| `sell`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | What the bot sells at. Null when it does not sell or the price is unknown. |