# V1AdminExportedSteamApiKey

## Example Usage

```typescript
import { V1AdminExportedSteamApiKey } from "@steamsets/client-ts/models/components";

let value: V1AdminExportedSteamApiKey = {
  createdAt: new Date("2024-01-30T14:32:21.793Z"),
  key: "<key>",
  keyId: "<id>",
  type: "web",
  updatedAt: new Date("2025-12-17T04:50:41.856Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `key`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | The plaintext Steam Web API key                                                                        |
| `keyId`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | Identifier of the key (primary key)                                                                    |
| `type`                                                                                                 | [components.V1AdminExportedSteamApiKeyType](../../models/components/v1adminexportedsteamapikeytype.md) | :heavy_check_mark:                                                                                     | Steam Web API key type                                                                                 |
| `updatedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |