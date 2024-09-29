# AccountV1SettingsDeveloperAppDeleteResponse

## Example Usage

```typescript
import { AccountV1SettingsDeveloperAppDeleteResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsDeveloperAppDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeveloperAppDeleteResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeveloperAppDeleteResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountDeveloperAppDeleteResponseBody`                                                                                | [components.V1AccountDeveloperAppDeleteResponseBody](../../models/components/v1accountdeveloperappdeleteresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |