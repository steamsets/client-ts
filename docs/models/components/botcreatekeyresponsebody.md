# BotCreateKeyResponseBody

## Example Usage

```typescript
import { BotCreateKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: BotCreateKeyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BotCreateKeyResponseBody.json",
  apiKey: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A URL to the JSON Schema for this object.                                                          | https://api.steamsets.com/schemas/BotCreateKeyResponseBody.json                                    |
| `apiKey`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | A push key for every bot you own. Shown once; store it now. Send the bot's steamId with each push. |                                                                                                    |