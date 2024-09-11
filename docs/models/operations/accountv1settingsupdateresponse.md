# AccountV1SettingsUpdateResponse

## Example Usage

```typescript
import { AccountV1SettingsUpdateResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1UpdateSettingsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1UpdateSettingsResponseBody.json",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1UpdateSettingsResponseBody`                                                                     | [components.V1UpdateSettingsResponseBody](../../models/components/v1updatesettingsresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |