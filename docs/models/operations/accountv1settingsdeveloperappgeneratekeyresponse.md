# AccountV1SettingsDeveloperAppGenerateKeyResponse

## Example Usage

```typescript
import { AccountV1SettingsDeveloperAppGenerateKeyResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsDeveloperAppGenerateKeyResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeveloperAppGenerateKeyResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeveloperAppGenerateKeyResponseBody.json",
    apiKey: "api_123",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `v1AccountDeveloperAppGenerateKeyResponseBody`                                                                                     | [components.V1AccountDeveloperAppGenerateKeyResponseBody](../../models/components/v1accountdeveloperappgeneratekeyresponsebody.md) | :heavy_minus_sign:                                                                                                                 | OK                                                                                                                                 |