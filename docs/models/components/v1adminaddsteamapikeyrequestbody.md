# V1AdminAddSteamApiKeyRequestBody

## Example Usage

```typescript
import { V1AdminAddSteamApiKeyRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminAddSteamApiKeyRequestBody = {
  key: "<key>",
  keyId: "<id>",
  type: "web",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The plaintext Steam Web API key. Encrypted via Vault before storage; never persisted or returned in plaintext.     |
| `keyId`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Caller-provided identifier for the key (primary key)                                                               |
| `type`                                                                                                             | [components.V1AdminAddSteamApiKeyRequestBodyType](../../models/components/v1adminaddsteamapikeyrequestbodytype.md) | :heavy_check_mark:                                                                                                 | Steam Web API key type                                                                                             |