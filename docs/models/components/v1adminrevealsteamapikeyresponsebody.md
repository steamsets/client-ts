# V1AdminRevealSteamApiKeyResponseBody

## Example Usage

```typescript
import { V1AdminRevealSteamApiKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminRevealSteamApiKeyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminRevealSteamApiKeyResponseBody.json",
  key: "<key>",
  keyId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `dollarSchema`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | A URL to the JSON Schema for this object.                                   | https://api.steamsets.com/schemas/V1AdminRevealSteamApiKeyResponseBody.json |
| `key`                                                                       | *string*                                                                    | :heavy_check_mark:                                                          | The plaintext Steam Web API key                                             |                                                                             |
| `keyId`                                                                     | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |