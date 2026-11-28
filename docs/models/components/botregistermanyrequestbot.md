# BotRegisterManyRequestBot

## Example Usage

```typescript
import { BotRegisterManyRequestBot } from "@steamsets/client-ts/models/components";

let value: BotRegisterManyRequestBot = {
  name: "<value>",
  steamId: "76561199756787903",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Listing name, e.g. "lvlupbot.com - legendary"                                                        |                                                                                                      |
| `steamId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | SteamID64 of the bot account                                                                         | 76561199756787903                                                                                    |
| `type`                                                                                               | [components.BotRegisterManyRequestBotType](../../models/components/botregistermanyrequestbottype.md) | :heavy_minus_sign:                                                                                   | What the bot trades.                                                                                 |                                                                                                      |