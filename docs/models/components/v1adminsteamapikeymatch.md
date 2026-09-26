# V1AdminSteamApiKeyMatch

## Example Usage

```typescript
import { V1AdminSteamApiKeyMatch } from "@steamsets/client-ts/models/components";

let value: V1AdminSteamApiKeyMatch = {
  keyId: "<id>",
  last4: "<value>",
  type: "web",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `keyId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `last4`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | Last four characters of the plaintext key                                                        |
| `type`                                                                                           | [components.V1AdminSteamApiKeyMatchType](../../models/components/v1adminsteamapikeymatchtype.md) | :heavy_check_mark:                                                                               | Steam Web API key type                                                                           |