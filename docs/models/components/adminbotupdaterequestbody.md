# AdminBotUpdateRequestBody

## Example Usage

```typescript
import { AdminBotUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBotUpdateRequestBody = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `brandId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Public id of the bot's brand. Empty clears it.                                                           |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The bot's public id.                                                                                     |
| `listingFeePaid`                                                                                         | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether staff confirmed the one-key listing fee.                                                         |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `ownerSteamId`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | SteamID64 of the bot's owner. Empty clears it.                                                           |
| `status`                                                                                                 | [components.AdminBotUpdateRequestBodyStatus](../../models/components/adminbotupdaterequestbodystatus.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [components.AdminBotUpdateRequestBodyType](../../models/components/adminbotupdaterequestbodytype.md)     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |