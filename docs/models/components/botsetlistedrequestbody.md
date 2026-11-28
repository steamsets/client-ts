# BotSetListedRequestBody

## Example Usage

```typescript
import { BotSetListedRequestBody } from "@steamsets/client-ts/models/components";

let value: BotSetListedRequestBody = {
  id: "bot_3cVFAKxh8Q2ZqkTq",
  isListed: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The public id of the bot (bot_...) or website (web_...).                                             | bot_3cVFAKxh8Q2ZqkTq                                                                                 |
| `isListed`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | true shows the bot or website to everyone once it is approved. false shows it only to you and staff. |                                                                                                      |