# AdminBotUpdateManyRequestBody

## Example Usage

```typescript
import { AdminBotUpdateManyRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBotUpdateManyRequestBody = {
  ids: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `brandId`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Public id of the bots' brand. Empty clears it.                                                                   |
| `ids`                                                                                                            | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | The bots' public ids.                                                                                            |
| `listingFeePaid`                                                                                                 | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether staff confirmed the one-key listing fee.                                                                 |
| `ownerSteamId`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | SteamID64 of the bots' owner. Empty clears it.                                                                   |
| `status`                                                                                                         | [components.AdminBotUpdateManyRequestBodyStatus](../../models/components/adminbotupdatemanyrequestbodystatus.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.AdminBotUpdateManyRequestBodyType](../../models/components/adminbotupdatemanyrequestbodytype.md)     | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |