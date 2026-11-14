# BotPushRate

## Example Usage

```typescript
import { BotPushRate } from "@steamsets/client-ts/models/components";

let value: BotPushRate = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `buy`                                              | *number*                                           | :heavy_minus_sign:                                 | What the bot buys at. 0 means it stopped buying.   |
| `sell`                                             | *number*                                           | :heavy_minus_sign:                                 | What the bot sells at. 0 means it stopped selling. |