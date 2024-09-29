# AccountV1SettingsDeveloperAppCreateResponse

## Example Usage

```typescript
import { AccountV1SettingsDeveloperAppCreateResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsDeveloperAppCreateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1DeveloperAppCreateResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1DeveloperAppCreateResponseBody.json",
    apiKey: "api_123",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `v1DeveloperAppCreateResponseBody`                                                                         | [components.V1DeveloperAppCreateResponseBody](../../models/components/v1developerappcreateresponsebody.md) | :heavy_minus_sign:                                                                                         | OK                                                                                                         |