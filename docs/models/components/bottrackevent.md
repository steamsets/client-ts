# BotTrackEvent

## Example Usage

```typescript
import { BotTrackEvent } from "@steamsets/client-ts/models/components";

let value: BotTrackEvent = {
  botId: "bot_3cVFAKxh8Q2ZqkTq",
  kind: "page",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `botId`                                                                                                                                   | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The bot's public id. An id no listed bot has is ignored.                                                                                  | bot_3cVFAKxh8Q2ZqkTq                                                                                                                      |
| `kind`                                                                                                                                    | [components.BotTrackEventKind](../../models/components/bottrackeventkind.md)                                                              | :heavy_check_mark:                                                                                                                        | list: the bot's row was on screen in the directory. page: its page was opened. click: a click through to its Steam profile or trade link. |                                                                                                                                           |