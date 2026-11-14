# BotTrackRequestBody

## Example Usage

```typescript
import { BotTrackRequestBody } from "@steamsets/client-ts/models/components";

let value: BotTrackRequestBody = {
  events: [
    {
      botId: "bot_3cVFAKxh8Q2ZqkTq",
      kind: "page",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `events`                                                               | [components.BotTrackEvent](../../models/components/bottrackevent.md)[] | :heavy_check_mark:                                                     | Up to 200 events. A repeat of the same bot and kind counts once.       |