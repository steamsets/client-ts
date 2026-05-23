# TradingItemSearchItemsResponseBody

## Example Usage

```typescript
import { TradingItemSearchItemsResponseBody } from "@steamsets/client-ts/models/components";

let value: TradingItemSearchItemsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/TradingItemSearchItemsResponseBody.json",
  items: [],
  results: 693045,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dollarSchema`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | A URL to the JSON Schema for this object.                                 | https://api.steamsets.com/schemas/TradingItemSearchItemsResponseBody.json |
| `items`                                                                   | [components.TradingItem](../../models/components/tradingitem.md)[]        | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |
| `results`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |