# BotRegisterResponseBody

## Example Usage

```typescript
import { BotRegisterResponseBody } from "@steamsets/client-ts/models/components";

let value: BotRegisterResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BotRegisterResponseBody.json",
  apiKey: "<value>",
  id: 989177,
  listingFeeKeys: 523883,
  listingFeeTradeUrl: "https://official-pepper.info",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `dollarSchema`                                                 | *string*                                                       | :heavy_minus_sign:                                             | A URL to the JSON Schema for this object.                      | https://api.steamsets.com/schemas/BotRegisterResponseBody.json |
| `apiKey`                                                       | *string*                                                       | :heavy_check_mark:                                             | The bot's push key. Shown once; store it now.                  |                                                                |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `listingFeeKeys`                                               | *number*                                                       | :heavy_check_mark:                                             | TF2 keys to send before the bot is reviewed.                   |                                                                |
| `listingFeeTradeUrl`                                           | *string*                                                       | :heavy_check_mark:                                             | Trade offer URL to send the fee to. Empty when not configured. |                                                                |