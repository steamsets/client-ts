# TradeBotListingFee

## Example Usage

```typescript
import { TradeBotListingFee } from "@steamsets/client-ts/models/components";

let value: TradeBotListingFee = {
  keys: 615749,
  tradeUrl: "https://equatorial-cosset.com",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `keys`                                                         | *number*                                                       | :heavy_check_mark:                                             | TF2 keys to send before the bot is reviewed.                   |
| `tradeUrl`                                                     | *string*                                                       | :heavy_check_mark:                                             | Trade offer URL to send the fee to. Empty when not configured. |