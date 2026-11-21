# AdminGetBotPayment

## Example Usage

```typescript
import { AdminGetBotPayment } from "@steamsets/client-ts/models/components";

let value: AdminGetBotPayment = {
  currency: "cs2",
  items: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `currency`                                                 | [components.Currency](../../models/components/currency.md) | :heavy_check_mark:                                         | N/A                                                        |
| `items`                                                    | *string*[]                                                 | :heavy_check_mark:                                         | Steam market hash names the bot takes as this currency.    |