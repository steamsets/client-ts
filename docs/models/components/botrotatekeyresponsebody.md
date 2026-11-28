# BotRotateKeyResponseBody

## Example Usage

```typescript
import { BotRotateKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: BotRotateKeyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/BotRotateKeyResponseBody.json",
  apiKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `dollarSchema`                                                  | *string*                                                        | :heavy_minus_sign:                                              | A URL to the JSON Schema for this object.                       | https://api.steamsets.com/schemas/BotRotateKeyResponseBody.json |
| `apiKey`                                                        | *string*                                                        | :heavy_check_mark:                                              | The bot's new push key. Shown once; store it now.               |                                                                 |