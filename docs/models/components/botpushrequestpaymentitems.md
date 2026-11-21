# BotPushRequestPaymentItems

## Example Usage

```typescript
import { BotPushRequestPaymentItems } from "@steamsets/client-ts/models/components";

let value: BotPushRequestPaymentItems = {
  items: [
    "Mann Co. Supply Crate Key",
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                            | *string*[]                                                                                                                                         | :heavy_check_mark:                                                                                                                                 | Steam market hash names that count as this currency, at most 20 of up to 128 characters. Replaces the stored list for this currency; [] clears it. | [<br/>"Mann Co. Supply Crate Key"<br/>]                                                                                                            |