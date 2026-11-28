# BotPlanPayment

## Example Usage

```typescript
import { BotPlanPayment } from "@steamsets/client-ts/models/components";

let value: BotPlanPayment = {
  cost: 200749,
  sets: {
    foil: 965948,
    normal: 635121,
  },
  setsPerUnit: 3401.49,
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cost`                                                                                                                                                 | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | What to pay, in whole units of the plan's currency. In keys or tickets, sets is exactly what the bot trades for cost: cost × setsPerUnit rounded down. |
| `sets`                                                                                                                                                 | [components.BotPlanSets](../../models/components/botplansets.md)                                                                                       | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `setsPerUnit`                                                                                                                                          | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The price: sets per key, or per gem.                                                                                                                   |