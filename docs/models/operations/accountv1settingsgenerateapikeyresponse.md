# AccountV1SettingsGenerateApiKeyResponse

## Example Usage

```typescript
import { AccountV1SettingsGenerateApiKeyResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsGenerateApiKeyResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1GenerateApiKeyResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1GenerateApiKeyResponseBody.json",
        key: "api_123",
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1GenerateApiKeyResponseBody`                                                                     | [components.V1GenerateApiKeyResponseBody](../../models/components/v1generateapikeyresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |