# AdminEventRef

## Example Usage

```typescript
import { AdminEventRef } from "@steamsets/client-ts/models/components";

let value: AdminEventRef = {
  id: "<id>",
  kind: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A bot's Steam avatar hash, on a bot or levels_bot ref. Empty when unknown.                                                   |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The entity's public key: a public id, a role slug, a crawler name.                                                           |
| `kind`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | What the entity is: order, trade, topup, levels_bot, bot, ticket, role, crawler, badge, steam_api_key. New kinds can appear. |
| `label`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The entity's name, when it has one.                                                                                          |