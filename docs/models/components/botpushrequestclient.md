# BotPushRequestClient

## Example Usage

```typescript
import { BotPushRequestClient } from "@steamsets/client-ts/models/components";

let value: BotPushRequestClient = {
  name: "Steam-levelup-BOT",
  version: "2.4.1",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The plugin or script, the same in every push it sends. Trimmed.                                                                        | Steam-levelup-BOT                                                                                                                      |
| `version`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Its version, ideally semantic (2.4.1). Trimmed. The response says when it is below the minimum the directory supports for this client. | 2.4.1                                                                                                                                  |