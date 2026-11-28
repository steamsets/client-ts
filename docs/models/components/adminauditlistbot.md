# AdminAuditListBot

## Example Usage

```typescript
import { AdminAuditListBot } from "@steamsets/client-ts/models/components";

let value: AdminAuditListBot = {
  avatar: "https://picsum.photos/seed/KV0VI/3838/149",
  name: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `avatar`                                                        | *string*                                                        | :heavy_check_mark:                                              | The Steam avatar hash of the bot's account. Empty when unknown. |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | The bot's directory name.                                       |