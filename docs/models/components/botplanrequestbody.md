# BotPlanRequestBody

## Example Usage

```typescript
import { BotPlanRequestBody } from "@steamsets/client-ts/models/components";

let value: BotPlanRequestBody = {
  targetLevel: 287774,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `excludeBots`                                                                          | *number*[]                                                                             | :heavy_minus_sign:                                                                     | Never buy from these bot IDs.                                                          |
| `games`                                                                                | [components.Games](../../models/components/games.md)                                   | :heavy_minus_sign:                                                                     | Limit to games you own, or to games you do not.                                        |
| `includeOffline`                                                                       | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Also buy from bots that report offline.                                                |
| `maxKeys`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | TF2 key budget. 0 means no budget.                                                     |
| `mode`                                                                                 | [components.BotPlanRequestBodyMode](../../models/components/botplanrequestbodymode.md) | :heavy_minus_sign:                                                                     | Which badges to craft.                                                                 |
| `onlyBots`                                                                             | *number*[]                                                                             | :heavy_minus_sign:                                                                     | Buy only from these bot IDs.                                                           |
| `skipCardApps`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Leave out apps you already hold cards of.                                              |
| `targetLevel`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |