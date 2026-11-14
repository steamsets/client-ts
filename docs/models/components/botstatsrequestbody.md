# BotStatsRequestBody

## Example Usage

```typescript
import { BotStatsRequestBody } from "@steamsets/client-ts/models/components";

let value: BotStatsRequestBody = {
  id: "bot_3cVFAKxh8Q2ZqkTq",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `days`                          | *number*                        | :heavy_minus_sign:              | Days to return, today included. |                                 |
| `id`                            | *string*                        | :heavy_check_mark:              | The bot's public id.            | bot_3cVFAKxh8Q2ZqkTq            |