# BotStatsCounts

## Example Usage

```typescript
import { BotStatsCounts } from "@steamsets/client-ts/models/components";

let value: BotStatsCounts = {
  click: 641537,
  list: 986015,
  page: 723649,
  plan: 645162,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `click`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | Unique visitors who clicked through to the bot's Steam profile or trade link. |
| `list`                                                                        | *number*                                                                      | :heavy_check_mark:                                                            | Unique visitors who had the bot's row on screen in the directory.             |
| `page`                                                                        | *number*                                                                      | :heavy_check_mark:                                                            | Unique visitors who opened the bot's page.                                    |
| `plan`                                                                        | *number*                                                                      | :heavy_check_mark:                                                            | Unique signed-in visitors whose calculator plan included the bot.             |