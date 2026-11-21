# BotPushRequestRate

## Example Usage

```typescript
import { BotPushRequestRate } from "@steamsets/client-ts/models/components";

let value: BotPushRequestRate = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `buy`                                                                                                                                | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The price when the bot buys from you, in the field's unit. 0 means it stopped buying. Sending a buy price is how a bot says it buys. |
| `sell`                                                                                                                               | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The price when the bot sells to you, in the field's unit. 0 means it stopped selling.                                                |