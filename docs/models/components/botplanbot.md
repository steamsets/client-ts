# BotPlanBot

## Example Usage

```typescript
import { BotPlanBot } from "@steamsets/client-ts/models/components";

let value: BotPlanBot = {
  apps: [
    {
      appId: 680660,
      foil: 104973,
      normal: 214530,
    },
  ],
  avatarUrl: "https://stale-porter.name",
  foilSets: 257615,
  id: 793359,
  keys: 282881,
  name: "<value>",
  normalSets: 144860,
  sellSetsPerKey: 5774.55,
  spareSets: 272016,
  steamId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apps`                                                           | [components.BotPlanApp](../../models/components/botplanapp.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `avatarUrl`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `foilSets`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `keys`                                                           | *number*                                                         | :heavy_check_mark:                                               | TF2 keys to pay this bot.                                        |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `normalSets`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sellSetsPerKey`                                                 | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `spareSets`                                                      | *number*                                                         | :heavy_check_mark:                                               | Sets the last key would still buy.                               |
| `steamId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |