# AdminBotListRequestBody

## Example Usage

```typescript
import { AdminBotListRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBotListRequestBody = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                           | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |
| `query`                                                                                                                                           | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The bot's public id, part of its name or its owner's Steam name, or the account id or SteamID64 of the bot or its owner. Empty matches every bot. |
| `status`                                                                                                                                          | [components.AdminBotListRequestBodyStatus](../../models/components/adminbotlistrequestbodystatus.md)                                              | :heavy_minus_sign:                                                                                                                                | Empty lists every status.                                                                                                                         |