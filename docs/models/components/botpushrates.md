# BotPushRates

## Example Usage

```typescript
import { BotPushRates } from "@steamsets/client-ts/models/components";

let value: BotPushRates = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `buy`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Sets the bot wants for one of its TF2 keys. 0 means it does not buy. |
| `sell`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | Sets the bot sells for one TF2 key. 0 means it does not sell.        |