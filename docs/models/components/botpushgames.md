# BotPushGames

## Example Usage

```typescript
import { BotPushGames } from "@steamsets/client-ts/models/components";

let value: BotPushGames = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `prices`                                                                                                  | [components.BotPushGamePrices](../../models/components/botpushgameprices.md)                              | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `stock`                                                                                                   | Record<string, *number*>                                                                                  | :heavy_minus_sign:                                                                                        | App ID to copies in stock, keys and gifts counted together. Replaces the stored game stock; {} clears it. |