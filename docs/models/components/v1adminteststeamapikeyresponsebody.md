# V1AdminTestSteamApiKeyResponseBody

## Example Usage

```typescript
import { V1AdminTestSteamApiKeyResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminTestSteamApiKeyResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminTestSteamApiKeyResponseBody.json",
  message: "<value>",
  methods: 426468,
  ok: false,
  status: 767289,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dollarSchema`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | A URL to the JSON Schema for this object.                                 | https://api.steamsets.com/schemas/V1AdminTestSteamApiKeyResponseBody.json |
| `message`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Human-readable result. Never contains the key.                            |                                                                           |
| `methods`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | Number of Web API methods the key can call, across all interfaces         |                                                                           |
| `ok`                                                                      | *boolean*                                                                 | :heavy_check_mark:                                                        | True when Steam answered HTTP 200                                         |                                                                           |
| `status`                                                                  | *number*                                                                  | :heavy_check_mark:                                                        | HTTP status from Steam, or 0 on a network error                           |                                                                           |