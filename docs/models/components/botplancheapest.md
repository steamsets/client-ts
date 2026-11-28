# BotPlanCheapest

## Example Usage

```typescript
import { BotPlanCheapest } from "@steamsets/client-ts/models/components";

let value: BotPlanCheapest = {
  cost: 465458,
  trades: 442842,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `cost`                                                    | *number*                                                  | :heavy_check_mark:                                        | What the cheapest plan costs, in whole units of currency. |
| `trades`                                                  | *number*                                                  | :heavy_check_mark:                                        | Bots the cheapest plan buys from.                         |