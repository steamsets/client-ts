# V1AdminSteamApiKey

## Example Usage

```typescript
import { V1AdminSteamApiKey } from "@steamsets/client-ts/models/components";

let value: V1AdminSteamApiKey = {
  createdAt: new Date("2024-12-30T16:36:51.537Z"),
  keyId: "<id>",
  last4: "<value>",
  type: "publisher",
  updatedAt: new Date("2024-10-04T21:00:10.913Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `keyId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the key (primary key)                                                           |
| `last4`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Last four characters of the plaintext key                                                     |
| `type`                                                                                        | [components.V1AdminSteamApiKeyType](../../models/components/v1adminsteamapikeytype.md)        | :heavy_check_mark:                                                                            | Steam Web API key type                                                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |