# BotPlanResponseBody

## Example Usage

```typescript
import { BotPlanResponseBody } from "@steamsets/client-ts/models/components";

let value: BotPlanResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotPlanResponseBody.json",
  bots: [],
  complete: false,
  keys: 579715,
  reachedLevel: 487432,
  sets: 638233,
  startLevel: 383666,
  targetLevel: 846275,
  xpNeeded: 246791,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/BotPlanResponseBody.json       |
| `bots`                                                           | [components.BotPlanBot](../../models/components/botplanbot.md)[] | :heavy_check_mark:                                               | Cheapest bot first.                                              |                                                                  |
| `complete`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | False when stock or the budget runs out before the target.       |                                                                  |
| `keys`                                                           | *number*                                                         | :heavy_check_mark:                                               | TF2 keys in total.                                               |                                                                  |
| `reachedLevel`                                                   | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `sets`                                                           | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `startLevel`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `targetLevel`                                                    | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `xpNeeded`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |