# BotRotateKeyRequestBody

## Example Usage

```typescript
import { BotRotateKeyRequestBody } from "@steamsets/client-ts/models/components";

let value: BotRotateKeyRequestBody = {
  id: "bot_3cVFAKxh8Q2ZqkTq",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The bot's public id.                                                                                                                               | bot_3cVFAKxh8Q2ZqkTq                                                                                                                               |
| `oldKeyExpiresIn`                                                                                                                                  | [components.OldKeyExpiresIn](../../models/components/oldkeyexpiresin.md)                                                                           | :heavy_minus_sign:                                                                                                                                 | How long the old key keeps working, so the bot can switch without failed pushes. now ends it at once. A key from before Unkey always ends at once. |                                                                                                                                                    |