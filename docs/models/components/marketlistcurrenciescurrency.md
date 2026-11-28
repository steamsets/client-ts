# MarketListCurrenciesCurrency

## Example Usage

```typescript
import { MarketListCurrenciesCurrency } from "@steamsets/client-ts/models/components";

let value: MarketListCurrenciesCurrency = {
  code: "<value>",
  perUsd: 5039.01,
  updatedAt: 813075,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `code`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | ISO 4217 code, such as EUR.                                                               |
| `perUsd`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | Units of the currency one US dollar buys at Steam's own rate. Multiply a USD price by it. |
| `updatedAt`                                                                               | *number*                                                                                  | :heavy_check_mark:                                                                        | When the rate was last read from Steam, in Unix milliseconds.                             |